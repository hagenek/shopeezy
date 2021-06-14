import React from "react";
import styled from "styled-components";

const CopyrightFooter = styled.footer`
  margin-top: 50px;
`;

const Footer = () => {
  return (
    <CopyrightFooter>
      COPYRIGHT ©2021 @Hagenek
      <p>Coffee + Pizza = Code</p>
    </CopyrightFooter>
  );
};

export default Footer;
