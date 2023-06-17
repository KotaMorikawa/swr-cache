import { user } from "@/app/User";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { page: number } }
) {
  const itemsPerPage = 10;

  const startIndex = (params.page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const users = user.slice(startIndex, endIndex);

  const totalPages = Math.ceil(user.length / itemsPerPage);

  const buildTimestamp = Math.random();

  const response = {
    users,
    totalPages,
    buildTimestamp,
  };

  return NextResponse.json(response);
}
