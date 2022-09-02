import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Fragment } from "react";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
