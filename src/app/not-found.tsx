//Custom 404 error page for this simple application, normally displayed when a user tries to access a non-existent route
"use client";
import Link from "next/link";
const Error = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="text-center flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold text-terniary">Error 404</h1>
        <p className="text-lg text-text">This page could not be found.</p>
        <Link href="/" className="underline font-semibold">
          Go Back
        </Link>
      </div>
    </div>
  );
};
export default Error;
