// If card view is selected, display users in card format
import { User } from "@/app/types/user";
import Link from "next/link";

const UserCard = ({ users }: { users: User[] }) => {
  return (
    <>
      <div className="flex flex-row flex-wrap w-full">
        {users.map((user: User) => (
          <Link
            key={user.id}
            href={`/users/${user.id}`}
            className="w-full sm:w-1/2 md:w-1/3 p-2 hover:scale-102 hover:shadow-sm transition-all duration-300 ease-in"
          >
            <div className="flex flex-col gap-6 items-center justify-center border border-terniary bg-terniary/40 hover:bg-terniary/60 transition-colors duration-300 ease-in py-4 rounded">
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-sm opacity-70">{user.email}</p>
              <span className="text-sm opacity-70">{user.phone}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default UserCard;
