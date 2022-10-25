import "./../styles/globals.css";
import "../styles/App.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRef } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          useErrorBoundary: false,
          refetchOnWindowFocus: false
        }
      }
    })
  );

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient.current}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
