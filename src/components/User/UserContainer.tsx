"use client";

const UserContainer = ({ user }: { user: User | null }) => {
  if (!user) {
    return <p>No Data</p>;
  }

  return (
    <div>
      <p>{user.id}</p>
      <p>{user.title}</p>
      <p>{user.body}</p>
      <p>{user.userId}</p>
    </div>
  );
};

export default UserContainer;
