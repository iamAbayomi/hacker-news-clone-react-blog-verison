import { useGetCustomStories } from "../hooks";
import AppLayout from "../layout";

const Home = () => {
  const { isLoading, customStories, fetchNextPage, isFetchingNextPage } =
    useGetCustomStories("topstories", "news");

  return (
    <AppLayout
      isLoading={isLoading}
      newsItems={customStories}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
};

export default Home;
