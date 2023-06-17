import UserContainer from "@/components/User/UserContainer";

const page = async ({ params }: { params: { id: string } }) => {
  const url = process.env.VERCEL_URL || "http://localhost:3000";
  const user = await fetch(`${url}/api/user/${params.id}`, {
    cache: "force-cache",
  }).then((res) => res.json());

  return <UserContainer user={user} />;
};

export default page;
