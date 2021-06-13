import { Product } from "../constants/types";
import React, { FC } from "react";
import {
  AddToCartButton,
  CardText,
  CardTitle,
  DefaultProductImage,
  PriceText,
  ProductCardContainer,
} from "../hagenek-ui/card-styles";

interface ProductCardProps {
  product: Product;
  key: number;
}

const ProductCard: FC<ProductCardProps> = ({ product, key }) => {
  return (
    <ProductCardContainer key={key}>
      <DefaultProductImage src={product.defaultImage} />
      <CardTitle>{product.name}</CardTitle>
      <CardText>{product.description}</CardText>
      <PriceText>
        {product.price?.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </PriceText>
      <AddToCartButton>Add to Cart</AddToCartButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
