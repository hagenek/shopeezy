import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const MainContent = styled.main`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
};

export default Layout;
