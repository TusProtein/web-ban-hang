import React from "react";
import Footer from "../Footer";
import Header from "../Header";

function MasterLayout({ children, ...props }) {
  return (
    <div {...props}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MasterLayout;
