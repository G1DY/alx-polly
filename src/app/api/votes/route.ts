// src/app/api/votes/route.ts
import { NextResponse } from "next/server";
import { voteService } from "@/domains/votes/services/voteService";

export async function POST(req: Request) {
  const body = await req.json();
  const result = await voteService.castVote(body);
  return NextResponse.json(result);
}
