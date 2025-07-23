"use client";
import ReusableError from "../Components/ReusableError";
const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return <ReusableError error={error} reset={reset} />;
};
export default Error;
