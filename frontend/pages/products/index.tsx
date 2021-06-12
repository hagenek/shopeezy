import { TextField } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "../../hooks/storeHooks";
import Banner from "../../components/Banner";
import { Products } from "../../constants/types";

interface ProductListProps {
  data: Products;
}

const ProductList: FC<ProductListProps> = ({ data }) => {
  const setProduct = useStoreActions((action) => action.setProduct);
  const product = useStoreState((state) => state.product);

  const [term, setTerm] = useState("");

  const [filteredProducts, setFilteredProducts] = useState([{}]);

  const setProducts = useStoreActions((action) => action.setProducts);
  const products = useStoreState((state) => state.products);

  useEffect(() => {
    setProducts(data);
  }, []);

  const searchInNameOfProductFilterFunction = (product, term) => {
    return product.name.includes(term);
  };

  const handleInputChange = (term) => {
    const searchResults = products.filter((product) => {
      return product.name.includes(term);
    });
    setFilteredProducts(searchResults);
    console.log("Filtered products: ", filteredProducts);
  };

  return (
    <div>
      <Banner></Banner>
      <h1>{term}</h1>
      <TextField
        variant="outlined"
        label="Search for a product"
        value={term}
        onChange={(event) => handleInputChange(event.target.value)}
      />
      <div key={product.id}>
        <h1>Hello</h1>
        <p>{product.name}</p>
      </div>
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
