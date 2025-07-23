// Main file for displaying users in either table or card format
// This file is a client component
"use client";
import { User } from "@/app/types/user";
import { useState } from "react";
import UserTable from "./UserTable";
import UserCard from "./UserCard";
import Link from "next/link";
const DisplayUsers = ({ fetchedUsers }: { fetchedUsers: User[] }) => {
  const [displayType, setDisplayType] = useState<"table" | "card">("card");
  if (fetchedUsers.length === 0) {
    return (
      <div className="p-4 text-red-800 text-xl">
        <p>No users found.</p>
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-row justify-between">
          <Link
            href="/users/new"
            className="bg-terniary text-sm rounded px-4 py-2 hover:bg-terniary/80 transition-colors duration-300 ease-in cursor-pointer font-semibold"
          >
            Add New User
          </Link>
          <select
            name="layout"
            id="layout"
            defaultValue={displayType}
            onChange={(e) => setDisplayType(e.target.value as "table" | "card")}
            className="p-2 border border-terniary flex justify-end rounded-md bg-bg text-text"
          >
            <option className="bg-terniary" value="card">
              Card
            </option>
            <option className="bg-terniary" value="table">
              Table
            </option>
          </select>
        </div>
        {displayType === "table" && <UserTable users={fetchedUsers} />}
        {displayType === "card" && <UserCard users={fetchedUsers} />}
      </div>
    </>
  );
};
export default DisplayUsers;
