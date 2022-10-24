import { Box, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { INewsItem } from "../types";

type ILayout = {
  children?: ReactElement;
  isLoading: boolean;
  newsItems: INewsItem[];
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
};
const AppLayout = ({
  children,
  isLoading,
  newsItems,
  isFetchingNextPage,
  fetchNextPage
}: ILayout) => {
  const menuHeader = ["news", "ask", "show", "jobs"];
  const router = useRouter();

  function goToPage(page: string) {
    router.push(`${page}`);
  }

  return (
    <Box>
      <Box className="App">
        <Box className="container">
          <Box className="header">
            <Box className="header-section">
              <Box className="header-image-section">
                <Image alt={"gif"} className={"header-image"} src={"y18.gif"} />
              </Box>
              <Box className="header-text-section">
                <Box
                  className="header-text-content"
                  onClick={() => goToPage("/")}
                >
                  <Text>Hackers News</Text>
                </Box>
                <Box className="header-menu">
                  {menuHeader.map((item: string, index: number) => (
                    <Box key={index} display={"flex"} alignItems={"center"}>
                      <Text
                        className="menu-item"
                        onClick={() => goToPage(item)}
                      >
                        {item}
                      </Text>
                      <Text ml={"10px"}>|</Text>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AppLayout;
