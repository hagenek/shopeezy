import { Container, TextField } from "@material-ui/core";
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
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
`;

interface ProductListProps {
  productsData: Products;
}

const ProductList: FC<ProductListProps> = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchResults = globalProducts?.filter((product) => {
      return product.name.toLowerCase().includes(term);
    });
    setFilteredProducts(searchResults);
    console.log("Filtered products: ", filteredProducts);
  };

  return (
    <Container>
      <Form>
        <TextField
          size="medium"
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
    </Container>
  );
};

export default ProductList;
