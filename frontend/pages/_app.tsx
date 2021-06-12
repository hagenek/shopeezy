import React from "react";
import { AppProps } from "next/app";
import { StoreProvider } from "easy-peasy";
import Layout from "../components/Layout";
import store from "../store/store";

import "../css/index.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StoreProvider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
