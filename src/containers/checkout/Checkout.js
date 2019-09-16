import React from "react";
import CheckoutSummary from "../../components/order/checkoutSummary/CheckoutSummary";

class Checkout extends React.Component {
  state = {
    ingrediants: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  };

  checkoutCancelled = () => {
    this.props.history.goBack();
  };
  checkoutContinued = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        {/*on click of Continue display this page by using routing and hide burger builder*/}
        <CheckoutSummary
          checkoutCancelled={this.checkoutCancelled}
          checkoutContinued={this.checkoutContinued}
          ingrediants={this.state.ingrediants}
        />
      </div>
    );
  }
}

export default Checkout;
