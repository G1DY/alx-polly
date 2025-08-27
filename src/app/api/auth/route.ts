// src/app/api/auth/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // For Supabase Auth webhooks (sign-in, sign-up, etc.)
  const payload = await req.json();
  console.log("Auth webhook received:", payload);

  return NextResponse.json({ status: "ok" });
}
