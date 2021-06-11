import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "../../hooks/storeHooks";

const ProductList = () => {
  const setProduct = useStoreActions((action) => action.setProduct);
  const product = useStoreState((state) => state.product);

  const [term, setTerm] = useState("knife");

  const setProducts = useStoreActions((action) => action.setProduct);
  const products = useStoreState((state) => state.products);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const searchInNameOfProductFilterFunction = (product, term) => {
    return product.name.includes(term);
  };

  const filterProductsOnSearchTerm = (term) => {
    return products?.filter(searchInNameOfProductFilterFunction(product, term));
  };

  return (
    <div>
      <TextField variant="outlined" />
      <h1>Lots of nice products!</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h1>Hello</h1>
            <p>{product.name}</p>
          </div>
        );
      })}
      <h2>Name: {product.name}</h2>
      <h3>Price: {product.price}</h3>
    </div>
  );
};

export default ProductList;
