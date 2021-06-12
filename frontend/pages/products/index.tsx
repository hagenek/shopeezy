import { TextField } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "../../hooks/storeHooks";
import Banner from "../../components/Banner";
import Products from "../../constants";

const ProductList = ({ data }: Products) => {
  const setProduct = useStoreActions((action) => action.setProduct);
  const product = useStoreState((state) => state.product);

  const [term, setTerm] = useState("");

  const [filteredProducts, setFilteredProducts] = useState([{}]);

  const setProducts = useStoreActions((action) => action.setProduct);
  const products = useStoreState((state) => state.products);

  useEffect(() => {
    setProducts(data);
  }, []);

  const searchInNameOfProductFilterFunction = (product, term) => {
    return product.name.includes(term);
  };

  const handleSearchInputChange = (e: any) => {
    setTerm(e.target.value);
  };

  const filterProductsOnSearchTerm = (term) => {
    return products?.filter(searchInNameOfProductFilterFunction(product, term));
  };

  return (
    <div>
      <Banner></Banner>
      <h1>{term}</h1>
      <TextField
        variant="outlined"
        value={term}
        onChange={handleSearchInputChange}
      />
      <div key={product.id}>
        <h1>Hello</h1>
        <p>{product.name}</p>
      </div>
      <h2>Name: {product.name}</h2>
      <h3>Price: {product.price}</h3>
    </div>
  );
};

export default ProductList;

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:8080/products`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
