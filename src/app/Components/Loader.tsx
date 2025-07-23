//Reusable Loader Component used when fetching data
const Loader = ({ txt }: { txt: string }) => {
  return (
    <>
      <div className="h-dvh w-full fixed top-0 left-0 flex items-center justify-center flex-col gap-10">
        <span className="h-10 w-10 animate-ping rounded-full bg-terniary opacity-75"></span>
        <div>{txt}</div>
      </div>
    </>
  );
};
export default Loader;
