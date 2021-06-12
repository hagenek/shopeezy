import { Grid } from "@material-ui/core";
import { useStoreState } from "../hooks/storeHooks";
import styled from "styled-components";
import { primary, secondary, primaryBold } from "../css/colors";
import { Product } from "../constants/types";
import React, { FC } from "react";

const CardTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const DefaultProductImage = styled.img`
  max-width: 200px;
`;

const ProductCardContainer = styled.article`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
`;

const AddToCartButton = styled.button`
  border: none;
  outline: 0;
  padding: 15px;
  margin: 10px;
  color: ${secondary};
  background-color: ${primaryBold};
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  border-radius: 3px;
`;

const ShowMoreButton = styled.button`
  border: none;
  outline: 0;
  padding: 25px 10px;
  color: ${secondary};
  background-color: ${primary};
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  border-radius: 3px;
`;

const PriceText = styled.p`
  color: grey;
  font-size: 22px;
`;

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = () => {
  const product = useStoreState((state) => state.product);

  return (
    <ProductCardContainer>
      <Grid item>
        <CardTitle>{product.name}</CardTitle>
        <DefaultProductImage src={product.defaultImage} />
        <AddToCartButton>Add to Cart</AddToCartButton>
      </Grid>
    </ProductCardContainer>
  );
};

export default ProductCard;
