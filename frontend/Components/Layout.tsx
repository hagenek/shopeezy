import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
