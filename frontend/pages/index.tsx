import React, { FC, useEffect } from "react";
import { useStoreActions, useStoreState } from "../hooks/storeHooks";
import AllProducts from "../components/AllProducts";
import styled from "styled-components";
import axios from "axios";
import HeroBanner from "../components/HeroBanner";
import { Container } from "@material-ui/core";
import { ProductCardContainer } from "../hagenek-ui/card-styles";

const ProductsContainer = styled.div`
  min-height: 85vh;
`;

const Home: FC = () => {
  const product = useStoreState((state) => state.product);
  const setProducts = useStoreActions((action) => action.setProducts);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http:localhost:3000/api/products");
      setProducts(res.data);
    };
  }, []);

  return (
    <>
      <HeroBanner />
      <AllProducts />
    </>
  );
};

export default Home;
