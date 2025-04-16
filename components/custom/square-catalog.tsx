"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CatalogItem {
  id: string;
  name: string;
  description?: string;
  variations?: Array<{
    id: string;
    itemVariationData?: {
      priceMoney?: {
        amount: number;
        currency: string;
      };
    };
  }>;
}

export function SquareCatalog() {
  const [items, setItems] = useState<CatalogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCatalog = async () => {
      try {
        const response = await fetch("/api/square/catalog");
        if (!response.ok) {
          throw new Error("Failed to fetch catalog");
        }
        const data = await response.json();
        setItems(data.objects || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCatalog();
  }, []);

  if (loading) {
    return <div>Loading catalog...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle>{item.name}</CardTitle>
          </CardHeader>
          <CardContent>
            {item.description && (
              <p className="text-sm text-gray-500">{item.description}</p>
            )}
            {item.variations?.[0]?.itemVariationData?.priceMoney && (
              <p className="mt-2 font-semibold">
                $
                {(
                  item.variations[0].itemVariationData.priceMoney.amount / 100
                ).toFixed(2)}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
