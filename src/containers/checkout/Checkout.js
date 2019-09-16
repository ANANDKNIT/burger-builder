import React from "react";
import CheckoutSummary from "../../components/order/checkoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends React.Component {
  state = {
    ingrediants: {}
  };

  checkoutCancelled = () => {
    this.props.history.goBack();
  };
  checkoutContinued = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingrediants = {};
    for (let param of query.entries()) {
      ingrediants[param[0]] = +param[1];
    }
    this.setState({ ingrediants: ingrediants });
  }

  render() {
    return (
      <div>
        {/*on click of Continue display this page by using routing and hide burger builder*/}
        <CheckoutSummary
          checkoutCancelled={this.checkoutCancelled}
          checkoutContinued={this.checkoutContinued}
          ingrediants={this.state.ingrediants}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          component={ContactData}
        />
      </div>
    );
  }
}

export default Checkout;
