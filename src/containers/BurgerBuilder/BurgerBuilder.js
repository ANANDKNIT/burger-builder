import React from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends React.Component {
  state = {
    ingrediant: {
      cheese: 2,
      bacon: 2,
      meat: 1,
      salad: 2
    }
  };
  render() {
    return (
      <Aux>
        <Burger ingrediant={this.state.ingrediant} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
