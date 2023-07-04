import { globalStyle } from "./styles/GlobalStyle";
import { Global, ThemeProvider } from "@emotion/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { theme } from "./styles/Theme";
import MainRouter from "./router/MainRouter";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 1000,
      refetchInterval: 0,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
