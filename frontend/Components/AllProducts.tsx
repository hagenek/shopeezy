import axios from "axios";
import { useStoreActions, useStoreState } from "../hooks/storeHooks";
import React, { FC, useEffect } from "react";
import { Product, Products } from "../constants/types";
import { ProductCardContainer } from "../hagenek-ui/card-styles";
import ProductCard from "./ProductCard";
import { Container } from "@material-ui/core";

const AllProducts: FC<any> = () => {
  const globalProducts = useStoreState((state) => state.products);
  const setGlobalProducts = useStoreActions((action) => action.setProducts);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3000/api/products/`);
      const productsData = res.data;
      setGlobalProducts(productsData);
    };
    fetchData();
  }, []);

  return (
    <Container>
      {globalProducts?.map((product: Product) => (
        <ProductCard product={product} key={product.id}></ProductCard>
      ))}
    </Container>
  );
};

export default AllProducts;
