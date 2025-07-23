"use client";

import ReusableError from "@/app/Components/ReusableError";
const reset = () => {
  reset();
};
const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return <ReusableError error={error} reset={reset} />;
};
export default Error;
