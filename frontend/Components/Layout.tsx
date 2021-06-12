import React from "react";
import Header from "./Header";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer> Placeholder footer</footer>
    </div>
  );
};

export default Layout;
