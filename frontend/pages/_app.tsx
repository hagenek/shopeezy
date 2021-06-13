import React from "react";
import { AppProps } from "next/app";
import { StoreProvider } from "easy-peasy";
import Layout from "../components/Layout";
import store from "../store/store";
import {
  DefaultToastContainer,
  ToastProvider,
} from "react-toast-notifications";

import "../css/index.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const ToastContainer = (props: any) => (
    <DefaultToastContainer style={{ zIndex: 10000 }} {...props} />
  );

  return (
    <ToastProvider autoDismiss={true} components={{ ToastContainer }}>
      <StoreProvider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    </ToastProvider>
  );
}

export default MyApp;
