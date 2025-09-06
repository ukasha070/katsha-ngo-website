import { NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:8000/api";
// src/app/api/legal/privacy-policy/route.ts

export async function GET() {
  const res = await fetch(`${BACKEND_URL}/legal/terms-of-use/`);
  const data = await res.json();
  return NextResponse.json(data);
}
