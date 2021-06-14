import { Cart, Product } from "../constants/types";
import React, { FC } from "react";
import {
  AddToCartButton,
  CardText,
  CardTitle,
  DefaultProductImage,
  PriceText,
  ProductCardContainer,
} from "../hagenek-ui/card-styles";
import { useStoreActions, useStoreState } from "../hooks/storeHooks";
import { useToasts } from "react-toast-notifications";
import { Grid } from "@material-ui/core";

interface ProductCardProps {
  product: Product;
  key: number;
}

const ProductCard: FC<ProductCardProps> = ({ product, key }) => {
  const globalProducts = useStoreState((store) => store.products);
  const cart: Cart = useStoreState((state) => state.cart);
  const setCart = useStoreActions((action) => action.setCart);

  const findProductById = (id: number, products) =>
    products.find((product: Product) => product.id === id);

  const { addToast } = useToasts();

  function addItemToCart(ide: number) {
    cart.products?.push({ id: ide, quantity: 1 });
    setCart(cart);
    addToast(`${findProductById(ide, globalProducts).name} added to cart`, {
      appearance: "success",
    });
  }

  return (
    <div key={key}>
      <Grid item>
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
          <AddToCartButton onClick={() => addItemToCart(product.id)}>
            Add to Cart
          </AddToCartButton>
        </ProductCardContainer>
      </Grid>
    </div>
  );
};

export default ProductCard;
