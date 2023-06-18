"use client";

import Link from "next/link";

const ListUser = ({ user }: { user: User }) => {
  return (
    <Link href={`/user/${user.id}`}>
      <div className="flex space-x-5">
        <p>{user.id}</p>
        <p>{user.title}</p>
        <p>{user.body}</p>
        <p>{user.userId}</p>
      </div>
    </Link>
  );
};

export default ListUser;
