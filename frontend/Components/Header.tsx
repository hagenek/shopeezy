import Image from "next/image";
import { primary, primaryBold, secondary } from "../css/colors";
import styled from "styled-components";
import React from "react";

const HeaderLinkText = styled.a`
  font-family: Lato;
  color: ${primaryBold};
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  float: left;
  text-align: center;
`;

const HeaderLogoText = styled.a`
  font-family: arial;
  color: #fff;
  font-weight: bold;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  float: left;
  text-align: center;
`;

const TopNav = styled.nav`
  background-color: ${secondary};
  overflow: hidden;
  display: flex;
`;

const Header = () => {
  return (
    <header>
      <TopNav className="topnav">
        <HeaderLogoText href="/">Shopeezy</HeaderLogoText>
        <HeaderLinkText href="profile">Profile</HeaderLinkText>
        <HeaderLinkText href="#contact">Contact</HeaderLinkText>
        <HeaderLinkText href="#about">About</HeaderLinkText>
      </TopNav>
    </header>
  );
};

export default Header;
