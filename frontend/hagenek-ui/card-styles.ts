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
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 300px;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  filter: contrast(70%);
  //filter: saturate(180%);
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  &::before {
    content: "";
    display: block;
    padding-top: 56.25%; // 16:9 aspect ratio
  }
  @media (min-width: 40rem) {
    &::before {
      padding-top: 66.6%; // 3:2 aspect ratio
    }
  }
`;

export const ProductCardContainer = styled.article`
  background-color: white;
  border-radius: 0.25rem;
  margin: 10px;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:hover {
    .card__image {
      filter: contrast(100%);
    }
  }
  max-width: 300px;
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
