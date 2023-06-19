import UserContainer from "@/components/User/UserContainer";

export async function generateStaticParams() {
  const url = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";
  const data = await fetch(`${url}/api/user`)
    .then((res) => {
      if (!res.ok) throw new Error(`${res.status}`);
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
  return data.map((user: { id: number }) => ({
    id: String(user.id),
  }));
}

const page = async ({ params }: { params: { id: string } }) => {
  const url = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";
  const user = await fetch(`${url}/api/user/${params.id}`, {
    cache: "force-cache",
  })
    .then((res) => {
      if (!res.ok) throw new Error(`${res.status}`);
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });

  return <UserContainer user={user} />;
};

export default page;
