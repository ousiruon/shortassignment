const ReusableError = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <html>
      <body className="h-dvh w-full fixed top-0 left-0 flex items-center justify-center flex-col gap-5 bg-bg text-text">
        <h1 className="bg-red-500">{error.message}</h1>
        <h2>Ooops, something went wrong!</h2>
        <button
          onClick={reset}
          className="px-4 py-2 bg-red-500 rounded cursor-pointer hover:bg-red-900 transition-colors duration-300 ease-in"
        >
          Try again
        </button>
      </body>
    </html>
  );
};
export default ReusableError;
