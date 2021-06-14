import axios from "axios";
import { useStoreActions, useStoreState } from "../hooks/storeHooks";
import React, { FC, useEffect } from "react";
import { Product, Products } from "../constants/types";
import { ProductCardContainer } from "../hagenek-ui/card-styles";
import ProductCard from "./ProductCard";
import { Container, Grid } from "@material-ui/core";

const AllProducts: FC<any> = () => {
  const setGlobalProducts = useStoreActions((action) => action.setProducts);
  const globalProducts = useStoreState((state) => state.products);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3000/api/products/`);
      const productsData = res.data;
      setGlobalProducts(productsData);
    };
    fetchData();
  }, []);

  return (
    <Grid container>
      {globalProducts?.map((product: Product) => (
        <ProductCard product={product} key={product.id}></ProductCard>
      ))}
    </Grid>
  );
};

export default AllProducts;
