import styled from "styled-components";
import { secondary, primaryBold } from "../css/colors";

const Button = styled.button`
  border: none;
  outline: 0;
  color: ${secondary};
  background-color: ${primaryBold};
  text-align: center;
  padding: 17px 35px;
  cursor: pointer;
  margin-top: 3px;
  margin-left: 10px;
  font-size: 16px;
  border-radius: 3px;
`;

export default Button;
