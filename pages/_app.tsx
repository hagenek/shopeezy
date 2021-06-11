import React from "react";
import { AppProps } from "next/app";
import { StoreProvider } from "easy-peasy";
import store from "../store/store";

import "../css/index.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />;
    </StoreProvider>
  );
}

export default MyApp;
