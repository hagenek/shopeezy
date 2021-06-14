import { primaryBold, secondary } from "../css/colors";
import styled from "styled-components";
import React, { useState } from "react";
import { ShoppingCart } from "@material-ui/icons";
import { useStoreState } from "../hooks/storeHooks";
import Link from "next/link";

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

const IconPlusText = styled.div`
  vertical-align: middle;
  display: inline-flex;
`;

const Header = () => {
  const cart = useStoreState((state) => state.cart);

  return (
    <header>
      <TopNav className="topnav">
        <Link href="/">
          <HeaderLogoText>Shopeezy</HeaderLogoText>
        </Link>
        <Link href="profile">
          <HeaderLinkText>My Account</HeaderLinkText>
        </Link>
        <Link href="products">
          <HeaderLinkText>All Products</HeaderLinkText>
        </Link>
        <Link href="cartinfo">
          <HeaderLinkText>
            <IconPlusText>
              <ShoppingCart />
            </IconPlusText>
          </HeaderLinkText>
        </Link>
      </TopNav>
    </header>
  );
};

export default Header;
