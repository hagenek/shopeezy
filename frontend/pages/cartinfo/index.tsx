import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { useStoreActions, useStoreState } from "../../hooks/storeHooks";
import { Product, Products } from "../../constants/types";
import ProductList from "..";

const ShoppingCart: any = () => {
  const [productsInCart, setProductsInCart] = useState([] as Products);
  const setGlobalProducts = useStoreActions((action) => action.setProducts);
  const cart = useStoreState((store) => store.cart);

  const findProductById = (id: number, products: Product[]) =>
    products.find((product: Product) => product.id === id);

  const productListFromCart = (globalP) => {
    const cartProducts = cart.products.map((prod: any) => {
      console.log("Product in cart: ", prod);
      return findProductById(prod.id, globalP);
    });
    setProductsInCart(cartProducts);
  };

  const sumPriceOfProducts = (products: any) => {
    const sum = products.reduce(
      (sum: any, { price }: { price: number }) => sum + price,
      0
    );
    return sum.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const renderProducts = (product: Product) => (
    <div className="card_item">
      <div className="product_img">
        <img src={product.defaultImage} alt="picture of product" />
      </div>
      <div className="product_info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className="close-btn">
          <i className="fa fa-close"></i>
        </div>
        <div className="product_rate_info">
          <h1>
            {" "}
            {product.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h1>
          <span className="pqt-minus">-</span>
          <span className="pqt">1</span>
          <span className="pqt-plus">+</span>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3000/api/products/`);
      const productsData = res.data;
      setGlobalProducts(productsData);
      productListFromCart(productsData);
    };
    fetchData();
    console.log("Products in cart!", productsInCart);
  }, []);

  return (
    <div>
      <div className="order_summary">
        <h1>Order Summary</h1>
        <hr />
        <div className="summary_card">
          {productsInCart.map((product) => renderProducts(product))}
          <div className="order_total">
            <p>Total Amount</p>
            <h4>{sumPriceOfProducts(productsInCart)}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
