import { TextField } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "../../hooks/storeHooks";
import Banner from "../../components/Banner";
import { Products } from "../../constants/types";

interface ProductListProps {
  productsData: Products;
}

const ProductList: FC<ProductListProps> = ({ productsData }) => {
  const [term, setTerm] = useState("");

  const [filteredProducts, setFilteredProducts] = useState([{}]);

  const setProducts = useStoreActions((action) => action.setProducts);
  const globalProducts = useStoreState((state) => state.products);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const searchInNameOfProductFilterFunction = (product, term) => {
    return product.name.includes(term);
  };

  const handleInputChange = (term: string) => {
    const searchResults = productsData.filter((product) => {
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
      {filteredProducts.map(() => (
        <h1>Hello world</h1>
      ))}
    </div>
  );
};

export default ProductList;

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/products`);
  const productData = await res.json();

  if (!productData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { productData }, // will be passed to the page component as props
  };
}
