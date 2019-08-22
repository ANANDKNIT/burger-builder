import React from "react";
import Aux from "../../hoc/Aux.js";
import classes from "./Layout.css";
const Layout = props => {
  return (
    <Aux>
      <div>toolbar, Side Drawer, Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
