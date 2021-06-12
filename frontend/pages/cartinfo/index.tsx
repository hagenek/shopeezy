import React, { FC, useState } from "react";
import axios from "axios";
import { useStoreState } from "../../hooks/storeHooks";
import { Products } from "../../constants/types";
import ProductList from "../products/[id]";

interface ShoppingCartProps {
  cartData: any;
}

const ShoppingCart: any = ({ cartData }) => {
  const products = useStoreState((state) => state.products);
  const cart = cartData[0];
  const [productsInCart, setProductsInCart] = useState({} as Products);

  console.log(cart);

  const productListFromCart = () => {
    const products = cartData[5].products.map((prod: any) =>
      products.find((p: any) => p.id === prod.id)
    );
    setProductsInCart(products);
  };

  return <div>{productsInCart[0].name}</div>;
};

export default ShoppingCart;

export async function getStaticProps(context) {
  const res = await axios.get(`http://localhost:3000/api/shoppingcart`);
  const cartData = res.data;

  if (!cartData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { cartData }, // will be passed to the page component as props
  };
}
