// Loading state for single user page
// This file will load while the user data is being fetched
import Loader from "@/app/Components/Loader";
const Loading = () => {
  return (
    <>
      <Loader txt="Loading user..." />
    </>
  );
};
export default Loading;
