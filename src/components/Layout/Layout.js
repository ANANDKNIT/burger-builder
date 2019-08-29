import React from "react";
import Aux from "../../hoc/Aux.js";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {
  state = {
    showSideDrawer:true
  }
  sideDrawerClosedHandler= () => {
this.setState({showSideDrawer:false})
  }
  sideDrawerOpenHandler= () => {
    this.setState({showSideDrawer:true})
  }
  handleSideDrawerClick = () =>{
    console.log("Clicked")
this.setState((prevState)=>({showSideDrawer:!prevState.showSideDrawer}))
  }

  render(){
  return (
    <Aux>
      <SideDrawer 
      closed={this.sideDrawerClosedHandler}
      open={this.state.showSideDrawer}
      />
      <Toolbar 
      clicked={this.handleSideDrawerClick}
      />
      <main className={classes.Content}>{this.props.children}</main>
    </Aux>
  );
}
};

export default Layout;
