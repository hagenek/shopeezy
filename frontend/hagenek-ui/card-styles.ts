import styled from "styled-components";
import { secondary, primaryBold } from "../css/colors";

export const CardTitle = styled.h1`
  font-size: 1.3em;
  text-align: center;
  padding: 0px 10px 0px 0px;
  color: ${secondary};
  marginbottom: auto;
`;

export const CardText = styled.p`
  font-size: 0.9em;
  text-align: center;
  padding: 0px 10px 0px 0px;
  color: ${secondary};
`;

export const DefaultProductImage = styled.img`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 300px;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  @media (min-width: 40rem) {
    &::before {
      padding-top: 66.6%; // 3:2 aspect ratio
    }
  }
`;

export const ProductCardContainer = styled.article`
  background-color: white;
  border-radius: 0.25rem;
  margin: 20px;
  box-shadow: 0 5px 20px -7px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 300px;
  height: 500px;
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
  margin-top: auto;
  margin-bottom: 0;
`;
