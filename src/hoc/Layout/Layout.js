import React from "react";
import Aux from "../Aux/Aux";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {
  state = {
    showSideDrawer: false
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  sideDrawerOpenHandler = () => {
    this.setState({ showSideDrawer: true });
  };
  handleSideDrawerClick = () => {
    console.log("Clicked");
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }));
  };

  render() {
    return (
      <Aux>
        <SideDrawer
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        />
        <Toolbar clicked={this.handleSideDrawerClick} />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
