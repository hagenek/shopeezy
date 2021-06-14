import { Container, Grid, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "../hooks/storeHooks";
import { Product } from "../constants/types";
import axios from "axios";
import Button from "../hagenek-ui/button";
import ProductCard from "../components/ProductCard";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  const [term, setTerm] = useState("");

  const [filteredProducts, setFilteredProducts] = useState([]);
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
    <Container style={{ width: "80vw" }}>
      <h1>Welcome to Shopeezy!</h1>
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
      <Grid container spacing={2}>
        {filteredProducts &&
          filteredProducts?.map((product: Product) => (
            <ProductCard product={product} key={product.id}></ProductCard>
          ))}
      </Grid>
    </Container>
  );
};

export default Home;
