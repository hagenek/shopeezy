import React from "react";
import Header from "./Header";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>COPYRIGHT ©2021</footer>
    </div>
  );
};

export default Layout;
