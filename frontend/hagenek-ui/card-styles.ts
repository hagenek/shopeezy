import styled from "styled-components";
import { secondary, primaryBold } from "../css/colors";

export const CardTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${secondary};
`;

export const CardText = styled.p`
  font-size: 1em;
  text-align: center;
  color: ${secondary};
`;

export const DefaultProductImage = styled.img`
  max-width: 300px;
`;

export const ProductCardContainer = styled.article`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  text-align: center;
  flex: 1;
`;

export const AddToCartButton = styled.button`
  border: none;
  outline: 0;
  padding: 15px;
  margin: 10px;
  color: ${secondary};
  background-color: ${primaryBold};
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  border-radius: 3px;
`;

export const PriceText = styled.p`
  color: grey;
  font-size: 22px;
`;
