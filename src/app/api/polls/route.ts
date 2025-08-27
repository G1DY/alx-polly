// src/app/api/polls/route.ts
import { NextResponse } from "next/server";
import { pollService } from "@/domains/polls/services/pollService";

export async function POST(req: Request) {
  const body = await req.json();
  const poll = await pollService.createPoll(body);
  return NextResponse.json(poll);
}
