import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { useStoreState } from "../../hooks/storeHooks";
import { Products } from "../../constants/types";
import ProductList from "../products";

const ShoppingCart: any = () => {
  const products = useStoreState((state) => state.products);
  const [productsInCart, setProductsInCart] = useState([] as Products);
  const cart = useStoreState((store) => store.cart);

  const productListFromCart = () => {
    const products = cart.products.map((prod: any) =>
      products.find((p: any) => p.id === prod.id)
    );
    setProductsInCart(products);
  };

  return (
    <div>
      <div className="order_summary">
        <h1>Order Summary</h1>
        <div className="summary_card">
          <div className="card_item">
            <div className="product_img">
              <img
                src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=643&q=80"
                alt=""
              />
            </div>
            <div className="product_info">
              <h1>Nike Shoes</h1>
              <p>Lorem Ipsum is simply dummy text.</p>
              <div className="close-btn">
                <i className="fa fa-close"></i>
              </div>
              <div className="product_rate_info">
                <h1>$ 200</h1>
                <span className="pqt-minus">-</span>
                <span className="pqt">1</span>
                <span className="pqt-plus">+</span>
              </div>
            </div>
          </div>
          <div className="card_item">
            <div className="product_img">
              <img
                src="https://images.unsplash.com/photo-1543512214-318c7553f230?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt=""
              />
            </div>
            <div className="product_info">
              <h1>Amazon Prime</h1>
              <p>Lorem Ipsum is simply dummy text.</p>
              <div className="close-btn">
                <i className="fa fa-close"></i>
              </div>
              <div className="product_rate_info">
                <h1>$ 160</h1>
                <span className="pqt-minus">-</span>
                <span className="pqt">1</span>
                <span className="pqt-plus">+</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="order_price">
            <p>Order summary</p>
            <h4>$400</h4>
          </div>
          <div className="order_service">
            <p>Additional Service</p>
            <h4>$10</h4>
          </div>
          <div className="order_total">
            <p>Total Amount</p>
            <h4>$370</h4>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default ShoppingCart;
/*
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
 */
