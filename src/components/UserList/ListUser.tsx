"use client";

import Link from "next/link";

const ListUser = ({ user }: { user: User }) => {
  return (
    <Link href={`/user/${user.id}`}>
      <div className="flex space-x-5">
        <p>{user.id}</p>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.memo}</p>
      </div>
    </Link>
  );
};

export default ListUser;
