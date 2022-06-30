import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme";
import { globalStyle } from "../styles/global";
// import GlobalStyle from "../styles/global";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Global styles={globalStyle(theme)} />
    </ThemeProvider>
  );
}

export default App;
