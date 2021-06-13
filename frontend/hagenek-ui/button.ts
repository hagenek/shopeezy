import styled from "styled-components";
import { secondary, primaryBold } from "../css/colors";

const Button = styled.button`
  border: none;
  outline: 0;
  color: ${secondary};
  width: 150px;
  height: 60px;
  background-color: ${primaryBold};
  text-align: center;
  cursor: pointer;
  margin-left: 10px;
  font-size: 16px;
  border-radius: 3px;
`;

export default Button;
