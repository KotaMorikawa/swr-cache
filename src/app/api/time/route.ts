import { NextResponse, NextRequest } from "next/server";

// pagination用のAPIRoute
export async function GET() {
  const time = Math.random();

  return NextResponse.json(time);
}
