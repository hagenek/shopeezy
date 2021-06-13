import { primaryBold, secondary } from "../css/colors";
import styled from "styled-components";
import React from "react";
import { ShoppingCart } from "@material-ui/icons";
import { useStoreState } from "../hooks/storeHooks";

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
        <HeaderLogoText href="/">Shopeezy</HeaderLogoText>
        <HeaderLinkText href="/profile">My Account</HeaderLinkText>
        <HeaderLinkText href="/products">Products</HeaderLinkText>
        <HeaderLinkText href="/cartinfo">
          <IconPlusText>
            <ShoppingCart /> ({cart.products.length ?? 0})
          </IconPlusText>
        </HeaderLinkText>
      </TopNav>
    </header>
  );
};

export default Header;
