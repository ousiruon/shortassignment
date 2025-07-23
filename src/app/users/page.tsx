// Main file for "users" route
import { fetchUsers } from "../lib/fetchUsers";
import { User } from "../types/user";
import DisplayUsers from "./Components/DisplayUsers";

const Users = async () => {
  const fetchedUsers: User[] = await fetchUsers();
  return (
    <>
      <div className="flex items-start justify-start p-10 flex-col gap-20">
        <h1 className="font-bold text-xl">Dashboard</h1>
        <div className="flex flex-1 w-full items-start justify-start">
          <DisplayUsers fetchedUsers={fetchedUsers} />
        </div>
      </div>
    </>
  );
};
export default Users;
