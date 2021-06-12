import React, { FC } from "react";
import Head from "next/head";
import ProductCard from "../components/ProductCard";
import Image from "next/image";
import ProductList from "./products/[id]";
import { useStoreState } from "../hooks/storeHooks";
import styled from "styled-components";

const ProductsContainer = styled.div`
  min-height: 85vh;
`;

const Home: FC = () => {
  const product = useStoreState((state) => state.product);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
          integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
        <title>Shopeezy</title>
      </Head>
      <ProductsContainer>
        <Image src="/logo.png" width={463} height={122} alt="Shopeezy logo" />
        <ProductCard product={product}></ProductCard>
      </ProductsContainer>
    </>
  );
};

export default Home;
