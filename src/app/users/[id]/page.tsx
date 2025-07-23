import { fetchSingleUser } from "@/app/lib/fetchSingleUser";
import { User } from "@/app/types/user";
import Link from "next/link";

const DisplaySingleUser = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const parameters = await params;
  if (!parameters || !parameters.id) {
    return <div>User not found</div>;
  }
  const id = parseInt(parameters.id);
  const user: User = await fetchSingleUser(id);
  return (
    <>
      <div className="p-10">
        <Link href="../users" className="underline text-sm font-bold">
          Back
        </Link>
      </div>
      <div className="flex items-center justify-center min-h-dvh p-10 flex-col gap-10">
        <h1 className="font-bold text-xl">{`${user.name}'s Details`}</h1>
        <div className="flex max-w-[400px] items-center justify-center gap-4 bg-terniary p-6 rounded">
          <div className="flex flex-col w-full border border-terniary px-6 py-3">
            <div className="flex flex-row gap-8 py-3 w-full justify-between">
              <div className="text-sm md:text-base">Name:</div>
              <div className="font-bold text-sm md:text-base">{user.name}</div>
            </div>
            <div className="flex flex-row gap-8 py-3 w-full justify-between">
              <div className="text-sm md:text-base">Username:</div>
              <div className="font-bold text-sm md:text-base">
                {user.username}
              </div>
            </div>
            <div className="flex flex-row gap-8 py-3 w-full justify-between">
              <div className="text-sm md:text-base">Email:</div>
              <div className="font-bold text-sm md:text-base">{user.email}</div>
            </div>
            <div className="flex flex-row gap-8 py-3 w-full justify-between">
              <div className="text-sm md:text-base">Phone:</div>
              <div className="font-bold text-sm md:text-base">{user.phone}</div>
            </div>
            <div className="flex flex-row gap-8 py-3 w-full justify-between">
              <div className="text-sm md:text-base">Website:</div>
              <div className="font-bold text-sm md:text-base">
                {user.website}
              </div>
            </div>
            <div className="flex flex-row gap-8 py-3 w-full justify-between items-start">
              <div className="text-sm md:text-base">Address:</div>
              <div className="text-right">
                <div className="font-bold text-sm md:text-base">
                  {user.address.street}
                </div>
                <div className="font-bold text-sm md:text-base">{`${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</div>
                <div className="text-xs font-bold">
                  GeoLocation: {user.address.geo.lat} - {user.address.geo.lat}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-8 py-3 w-full justify-between">
              <div className="text-sm md:text-base">Company:</div>
              <div className="text-right">
                <div className="font-bold text-sm md:text-base">
                  {user.company.name}
                </div>
                <div className="font-bold text-sm">
                  {user.company.catchPhrase}
                </div>
                <div className="font-bold text-xs">{user.company.bs}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DisplaySingleUser;
