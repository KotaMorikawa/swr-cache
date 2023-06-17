import UserContainer from "@/components/User/UserContainer";

const page = async ({ params }: { params: { id: string } }) => {
  const user = await fetch(`http://localhost:3000/api/user/${params.id}`, {
    cache: "force-cache",
  }).then((res) => res.json());

  return <UserContainer user={user} />;
};

export default page;
