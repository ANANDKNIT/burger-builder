import React from "react";
import Aux from "../../hoc/Aux.js";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
const Layout = props => {
  return (
    <Aux>
      <Toolbar></Toolbar>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
