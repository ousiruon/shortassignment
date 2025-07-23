// If table view is selected, display users in table format
import { User } from "@/app/types/user";
import Link from "next/link";

const UserTable = ({ users }: { users: User[] }) => {
  return (
    <>
      <div className="flex flex-col w-full border border-terniary rounded">
        {users.map((user: User) => (
          <Link
            key={user.id}
            href={`/users/${user.id}`}
            className="p-2 not-last:border-b border-terniary even:bg-terniary/10 hover:bg-terniary/40  transition-colors duration-300 ease-in"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
              <div className="text-center sm:text-left">
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <p className="text-sm opacity-70">{user.email}</p>
              </div>
              <span className="text-sm opacity-70">{user.phone}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default UserTable;
