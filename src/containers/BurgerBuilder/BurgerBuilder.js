import React from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import Buildcontrols from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-order";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler"

const INGREDIANT_PRICES = {
  cheese: 1.5,
  bacon: 2.3,
  meat: 3.5,
  salad: 4.7
};
class BurgerBuilder extends React.Component {
  state = {
    ingrediants: {
      cheese: 0,
      bacon: 0,
      meat: 0,
      salad: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false
  };
  addIngrediantsHandler = type => {
    const oldCount = this.state.ingrediants[type];
    const updatedCount = oldCount + 1;
    const updatedIngrediants = {
      ...this.state.ingrediants
    };
    const priceAddtion = INGREDIANT_PRICES[type];
    updatedIngrediants[type] = updatedCount;
    this.setState({ ingrediants: updatedIngrediants });
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddtion;
    this.setState({ totalPrice: newPrice });
    this.updatePurchaseState(updatedIngrediants);
  };
  removeIngrediantsHandler = type => {
    const oldCount = this.state.ingrediants[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngrediants = {
      ...this.state.ingrediants
    };
    const priceDeduction = INGREDIANT_PRICES[type];
    updatedIngrediants[type] = updatedCount;
    this.setState({ ingrediants: updatedIngrediants });
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice });
    this.updatePurchaseState(updatedIngrediants);
  };

  updatePurchaseState(updatedIngrediants) {
    const ingrediants = { ...updatedIngrediants };
    const sum = Object.keys(ingrediants)
      .map(igkey => {
        return ingrediants[igkey];
      })
      .reduce((sum, el) => {
        return (sum += el);
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    // alert("Burger Purchased");
    this.setState({loading:true});

    const order = {
      ingrediants: this.state.ingrediants,
      price: this.state.totalPrice,
      customer: {
        name: "Anand",
        address: {
          street: "my Street 1",
          zipCode: "500013",
          city: "Bangalore",
          country: "India"
        },
        email: "anand.sharma0510@gmail.com",
        deliveryMethod: "fastest"
      }
    };
    axios
      .post("/orders", order)
      .then(response => {
        console.log(response,"purchase request sent successfully");
        this.setState({loading:false,purchasing:false});

      }
      ).catch(error => {
        this.setState({loading:false,purchasing:false});
        console.log(error);
      });
  };

  render() {
    const disableInfo = { ...this.state.ingrediants };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    let orderSummary = (
      <OrderSummary
        ingrediants={this.state.ingrediants}
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        totalPrice={this.state.totalPrice}
      />
    );

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        <Burger ingrediants={this.state.ingrediants} />
        <Buildcontrols
          ingrediantAdded={this.addIngrediantsHandler}
          ingrediantRemoved={this.removeIngrediantsHandler}
          disabled={disableInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder,axios);
