// import { user } from "@/app/User";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const users = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  const targetUser = users.filter(
    (user: User) => user.id === Number(params.id)
  );

  return NextResponse.json(targetUser[0]);
}
