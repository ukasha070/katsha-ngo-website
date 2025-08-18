import { NextResponse } from "next/server";
import { EXCHANGE_ACCESS_KEY } from "@/config";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const from = searchParams.get("from");

  if (!from || !["USD", "EUR", "GBP"].includes(from)) {
    return NextResponse.json({ error: "Invalid currency" }, { status: 400 });
  }

  if (!EXCHANGE_ACCESS_KEY) {
    throw new Error("Missing EXCHANGE_ACCESS_KEY env variable");
  }

  try {
    const res = await fetch(
      `http://api.exchangerate.host/convert?access_key=${EXCHANGE_ACCESS_KEY}&from=${from}&to=UGX&amount=1`
    );
    const data = await res.json();

    return NextResponse.json(
      {
        rate: data.info.rate,
        result: data.result,
      },
      {
        status: 200,
        headers: {
          // Cache for 1 hour (3600 seconds) 86400 24hours 604800 week
          "Cache-Control": "public, max-age=604800, stale-while-revalidate=60",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch rates" },
      { status: 500 }
    );
  }
}
