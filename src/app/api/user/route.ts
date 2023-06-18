// import { user } from "@/app/User";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );
  return NextResponse.json(user);
}
