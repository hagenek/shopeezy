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
import { useStoreState } from "../hooks/storeHooks";
import { AddToast } from "react-toast-notifications";

interface ProductCardProps {
  product: Product;
  key: number;
}

const ProductCard: FC<ProductCardProps> = ({ product, key }) => {
  const globalProducts = useStoreState((store) => store.products);
  const findProductById = (id: number, products) =>
    products.find((product) => product.id === id);

  const addItemToCart = (id: number) => {
    console.log("Product ID", id);
    /*  AddToast(`Item ${findProductById(id, globalProducts).name} added to cart`); */
  };

  return (
    <div key={key}>
      <ProductCardContainer>
        <DefaultProductImage src={product.defaultImage} />
        <CardTitle>{product.name}</CardTitle>
        <CardText>{product.description}</CardText>
        <PriceText>
          {product.price?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </PriceText>
        <AddToCartButton onClick={addItemToCart(product.id)}>
          Add to Cart
        </AddToCartButton>
      </ProductCardContainer>
    </div>
  );
};

export default ProductCard;
