import React from "react";
import Header from "../components/Header";

const Layout = (props) => {
  const { children } = props;
  return (
    <main>
      <Header />
      <div className="content">{children}</div>
    </main>
  );
};

export default Layout;
