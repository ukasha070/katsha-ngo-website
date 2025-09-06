import { NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:8000/api";

type Params = {
  params: { slug: string };
};

export async function GET(req: Request, { params }: Params) {
  const { slug } = await params;


  try {
    const res = await fetch(`${BACKEND_URL}/articles/${slug}/`, {
      method: "GET",
      cache: "no-store"
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Article not found" },
        { status: res.status }
      );
    }

    const article = await res.json();
    return NextResponse.json(article);
  } catch (error) {
    console.error("Error fetching article:", error);
    return NextResponse.json(
      { error: "Failed to fetch article" },
      { status: 500 }
    );
  }
}