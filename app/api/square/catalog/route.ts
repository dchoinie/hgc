import { NextResponse } from "next/server";
import defaultClient from "@/lib/square";

export async function GET() {
  try {
    const result = await defaultClient.catalog.searchItems();

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching Square catalog:", error);
    return NextResponse.json(
      { error: "Failed to fetch catalog items" },
      { status: 500 }
    );
  }
}
