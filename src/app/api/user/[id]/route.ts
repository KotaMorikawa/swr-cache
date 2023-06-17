import { user } from "@/app/User";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const targetUser = user.find((user) => user.id === Number(params.id));

  return NextResponse.json(targetUser);
}
