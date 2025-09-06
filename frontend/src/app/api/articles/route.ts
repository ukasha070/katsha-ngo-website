import { articleType, paginatedResponseType } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";


const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:8000/api";

export async function GET(req: NextRequest) {
  try {
    // ✅ Parse query params from frontend request
    const { searchParams } = new URL(req.url);
    const tags = searchParams.get("tags");
    const search = searchParams.get("search");
    const success = searchParams.get("success");
    const page = searchParams.get("page") || "1";
    const category = searchParams.get("category");
    const is_featured = searchParams.get("is_featured");
    const is_fundraise = searchParams.get("is_fundraise");
    
    // ✅ Build query for Django
    const queryParams = new URLSearchParams();
    if (tags) queryParams.set("tags", tags);
    if (search) queryParams.set("search", search);
    if (success) queryParams.set("success", success);
    if (category) queryParams.set("category", category);
    if (is_featured) queryParams.set("is_featured", is_featured);
    if (is_fundraise) queryParams.set("is_fundraise", is_fundraise);
    

    queryParams.set("page", page);

    const response = await fetch(
      `${BACKEND_URL}/articles/?${queryParams.toString()}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch articles" },
        { status: response.status }
      );
    }

    const data: paginatedResponseType<articleType> = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching articles:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
