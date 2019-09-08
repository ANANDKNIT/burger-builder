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
  render() {
    return (
      <div>
        {/*on click of Continue display this page by using routing */}
        <CheckoutSummary ingrediants={this.state.ingrediants} />
      </div>
    );
  }
}

export default Checkout;
