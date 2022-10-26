import { useGetCustomStories } from "@/hooks/index";
import { getQueryPath } from "@/utils/helpers";
import { Box, Text } from "@chakra-ui/react";
import AppLayout from "layout";
import { useRouter } from "next/router";

const Index = () => {
  const route = useRouter();
  const category_path = route.query.category_path;
  const { url, queryKey } = getQueryPath(category_path)!!;

  const { isLoading, customStories, fetchNextPage, isFetchingNextPage } =
    useGetCustomStories(url, queryKey);

  return (
    <AppLayout
      isLoading={isLoading}
      newsItems={customStories}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
};

export default Index;
