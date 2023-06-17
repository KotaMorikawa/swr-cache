"use client";

import { usersWithPagination } from "@/hooks/usersWithPagination";
import { useState } from "react";
import ListUser from "./ListUser";
import { useTime } from "@/hooks/time";

const UsersList = () => {
  const [page, setPage] = useState<number>(1);

  const { users, totalPages, number, isLoading, isError } =
    usersWithPagination(page);
  const { time, isLoading2, isError2 } = useTime();

  if (isLoading || isLoading2) return <div>Loading...</div>;
  if (isError || isError2) return <div>Error loading users</div>;

  return (
    <div>
      {users.map((user: User, i: number) => (
        <ListUser key={i} user={user} />
      ))}
      <div className="space-x-2 flex">
        <button
          className="border-2 border-green-400"
          disabled={page === 1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Previous
        </button>
        <div>
          {page}: {number}
        </div>
        <button
          className="border-2 border-green-400"
          disabled={page === totalPages}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
      <p>{time}</p>
    </div>
  );
};

export default UsersList;
