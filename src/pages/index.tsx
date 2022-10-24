import AppLayout from "../layout";

const Home = () => {
  return (
    <AppLayout
      isLoading={false}
      newsItems={[]}
      isFetchingNextPage={false}
      fetchNextPage={() => {}}
    />
  );
};

export default Home;
