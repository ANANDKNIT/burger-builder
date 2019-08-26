import React from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import Buildcontrols from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
const INGREDIANT_PRICES = {
  cheese: 1.5,
  bacon: 2.3,
  meat: 3.5,
  salad: 4.7
};
class BurgerBuilder extends React.Component {
  state = {
    ingrediant: {
      cheese: 0,
      bacon: 0,
      meat: 0,
      salad: 0
    },
    totalPrice: 4,
    purchasable: false
  };
  addIngrediantsHandler = type => {
    const oldCount = this.state.ingrediant[type];
    const updatedCount = oldCount + 1;
    const updatedIngrediants = {
      ...this.state.ingrediant
    };
    const priceAddtion = INGREDIANT_PRICES[type];
    updatedIngrediants[type] = updatedCount;
    this.setState({ ingrediant: updatedIngrediants });
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddtion;
    this.setState({ totalPrice: newPrice });
    this.updatePurchaseState(updatedIngrediants);
  };
  removeIngrediantsHandler = type => {
    const oldCount = this.state.ingrediant[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngrediants = {
      ...this.state.ingrediant
    };
    const priceDeduction = INGREDIANT_PRICES[type];
    updatedIngrediants[type] = updatedCount;
    this.setState({ ingrediant: updatedIngrediants });
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice });
    this.updatePurchaseState(updatedIngrediants);
  };

  updatePurchaseState(updatedIngrediants) {
    const ingrediant = { ...updatedIngrediants };
    const sum = Object.keys(ingrediant)
      .map(igkey => {
        return ingrediant[igkey];
      })
      .reduce((sum, el) => {
        return (sum += el);
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  render() {
    const disableInfo = { ...this.state.ingrediant };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal>
          <OrderSummary ingrediants={this.state.ingrediant} />
        </Modal>
        <Burger ingrediant={this.state.ingrediant} />
        <Buildcontrols
          ingrediantAdded={this.addIngrediantsHandler}
          ingrediantRemoved={this.removeIngrediantsHandler}
          disabled={disableInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
