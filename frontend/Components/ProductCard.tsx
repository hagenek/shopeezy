import { Grid } from "@material-ui/core";
import { useStoreState } from "../hooks/storeHooks";
import styled from "styled-components";

const CardTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const DefaultProductImage = styled.img`
  max-width: 200px;
`;
/*
{
  id: 10,
  name: "Handcrafted Steel Salad",
  description: "The Football Is Good For Training And Recreational Purposes",
  defaultImage: "http://placeimg.com/640/480/cats",
  images: [
    "http://placeimg.com/640/480/cats",
    "http://placeimg.com/640/480/cats",
    "http://placeimg.com/640/480/cats",
    "http://placeimg.com/640/480/cats",
  ],
  price: 94127.96,
  discount: 49,
},


 */
const ProductCard = () => {
  const product = useStoreState((state) => state.product);

  return (
    <Grid item>
      <p>{product.name}</p>
      <CardTitle>{product.name}</CardTitle>
      <DefaultProductImage src={product.defaultImage} />
    </Grid>
  );
};

export default ProductCard;
