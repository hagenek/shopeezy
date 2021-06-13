import { Container, Grid, TextField } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "../../hooks/storeHooks";
import Banner from "../../components/HeroBanner";
import { Product, Products } from "../../constants/types";
import axios from "axios";
import Button from "../../hagenek-ui/button";
import Form from "../../hagenek-ui/form";
import ProductCard from "../../components/ProductCard";
import styled from "styled-components";
import HeroBanner from "../../components/HeroBanner";

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

  const [filteredProducts, setFilteredProducts] = useState([]);

  const setGlobalProducts = useStoreActions((action) => action.setProducts);
  const globalProducts = useStoreState((state) => state.products);

  useEffect(() => {
    console.log("filtered products", filteredProducts);
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
    <Container style={{ width: "80vw" }}>
      <form>
        <Grid container>
          <Grid item xs={12}>
            <HeroBanner />
          </Grid>
          <Grid item sm={6}>
            <TextField
              autoFocus
              fullWidth
              variant="outlined"
              label="Search for a product"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button onClick={handleSubmit}>Search</Button>
          </Grid>
        </Grid>
      </form>
      <div>
        {filteredProducts &&
          filteredProducts?.map((product: Product) => (
            <ProductCard product={product} key={product.id}></ProductCard>
          ))}
      </div>
    </Container>
  );
};

export default ProductList;
