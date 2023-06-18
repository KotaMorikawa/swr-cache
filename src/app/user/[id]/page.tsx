import UserContainer from "@/components/User/UserContainer";

const url = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export async function generateStaticParams() {
  const data = await fetch(`${url}/api/user`)
    .then((res) => {
      if (!res.ok) throw new Error(`${res.status}`);
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });

  return data.map((user: { id: string }) => ({
    id: String(user.id),
  }));
}

const getUser = async (id: string) => {
  const data = await fetch(`${url}/api/user/${id}`, { cache: "force-cache" })
    .then((res) => {
      if (!res.ok) throw new Error(`${res.status}`);
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

const page = async ({ params }: { params: { id: string } }) => {
  const user = await getUser(params.id);

  return <UserContainer user={user} />;
};

export default page;
