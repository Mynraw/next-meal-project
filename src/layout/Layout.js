import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
