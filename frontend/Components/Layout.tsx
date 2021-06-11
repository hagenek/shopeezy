import React from "react";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div>
      <header> Placeholder header</header>
      <main>{children}</main>
      <footer> Placeholder footer</footer>
    </div>
  );
};

export default Layout;
