import React from "react";
import SectionTitle from "./SectionTitle";
import Container from "./Container";
import {
  Cannabis,
  Asterisk,
  ThumbsUp,
  Heart,
  ShoppingCart,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

interface DifferenceItem {
  title: string;
  icon: React.ReactNode;
  description: string | React.ReactNode;
}

const differenceItems: DifferenceItem[] = [
  {
    title: "Terpenes",
    icon: <Cannabis size={40} />,
    description: "Terpenes boost potential health benefits.",
  },
  {
    title: "Clean",
    icon: <Asterisk size={40} />,
    description: (
      <>
        Nothing Artificial.{" "}
        <span className="line-through">
          Corn Syrup, Seed Oil, Artificial Ingredients
        </span>
      </>
    ),
  },
  {
    title: "Effective",
    icon: <ThumbsUp size={40} />,
    description: "Strong & Effective, but still taste amazing!",
  },
  {
    title: "Inclusive",
    icon: <Heart size={40} />,
    description: "Vegetarian, Vegan, and Gluten Free",
  },
];

const Difference = () => {
  return (
    <div className="py-24">
      <SectionTitle title="What makes us different?" />
      <Container>
        <div className="flex justify-between mt-24 gap-24">
          {differenceItems.map((item: DifferenceItem) => (
            <div key={item.title} className="flex flex-col items-center">
              <span className="text-brand-green">{item.icon}</span>
              <h3 className="text-2xl font-bold mt-3 mb-1 text-brand-green">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-24">
          <Button
            variant="default"
            size="lg"
            asChild
            className="self-start border border-brand-green bg-brand-green rounded"
          >
            <Link href="/shop">
              Shop Now <ShoppingCart className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Difference;
