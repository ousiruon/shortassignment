// Loading state for all users page
// This file will load while the users data is being fetched
import Loader from "../Components/Loader";

const Loading = () => {
  return (
    <>
      <Loader txt="Loading users..." />
    </>
  );
};
export default Loading;
