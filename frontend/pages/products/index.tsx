import { TextField } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "../../hooks/storeHooks";
import Banner from "../../components/HeroBanner";
import { Product, Products } from "../../constants/types";
import axios from "axios";
import Button from "../../hagenek-ui/button";
import Form from "../../hagenek-ui/form";
import ProductCard from "../../components/ProductCard";
import styled from "styled-components";

const ProductCardContainer = styled.section`
  display: flex;
`;

interface ProductListProps {
  productsData: Products;
}

const ProductList: FC<ProductListProps> = ({ productsData }) => {
  const [term, setTerm] = useState("");

  const [filteredProducts, setFilteredProducts] = useState([{}]);

  const setGlobalProducts = useStoreActions((action) => action.setProducts);
  const globalProducts = useStoreState((state) => state.products);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3000/api/products/`);
      const productsData = res.data;
      setGlobalProducts(productsData);
    };
    fetchData();
  }, []);

  const searchInNameOfProductFilterFunction = (product, term) => {
    return product.name.includes(term);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchResults = globalProducts?.filter((product) => {
      return product.name.toLowerCase().includes(term);
    });
    setFilteredProducts(searchResults);
    console.log("Filtered products: ", filteredProducts);
  };

  return (
    <div>
      <Banner></Banner>
      <Form>
        <TextField
          variant="outlined"
          label="Search for a product"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <Button onClick={handleSubmit}>Search</Button>
      </Form>
      <ProductCardContainer>
        {filteredProducts?.map((product: Product) => (
          <ProductCard product={product} key={product.id}></ProductCard>
        ))}
      </ProductCardContainer>
    </div>
  );
};

export default ProductList;
/*
export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3000/api/products/`);
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
 */
