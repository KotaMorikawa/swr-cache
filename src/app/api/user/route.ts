import { user } from "@/app/User";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(user);
}
