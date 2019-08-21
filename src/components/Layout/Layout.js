import React from "react";
import Aux from "../../hoc/Aux.js";
import "./Layout.css";
const Layout = props => {
  return (
    <Aux>
      <div>toolbar, Side Drawer, Backdrop</div>
      <main className="container">{props.children}</main>
    </Aux>
  );
};

export default Layout;
