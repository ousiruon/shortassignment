// Home page, it serves as an entry point for this application
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="flex w-full h-dvh items-center justify-center">
        <Link
          href="/users"
          className="text-2xl font-bold hover:opacity-70 transition-all duration-300 ease-in px-4 text-center"
        >
          Go to User Management Dashboard
        </Link>
      </div>
    </>
  );
};
export default Home;
