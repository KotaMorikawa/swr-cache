import { NextResponse } from "next/server";

export async function GET() {
  const time = Math.random();

  return NextResponse.json(time);
}
