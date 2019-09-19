import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axios-order";
import Spinner from "../../../components/UI/Spinner/Spinner";
export default class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false,
    totalPrice: 0
  };

  orderHandler = event => {
    event.preventDefault();
    console.log(
      this.props.ingrediants,
      this.props.totalPrice,
      "order button clicked"
    );
    this.setState({ loading: true });

    const order = {
      ingrediants: this.props.ingrediants,
      price: this.props.totalPrice,
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
      .post("/orders.json", order)
      .then(response => {
        console.log(response, "purchase request sent successfully");
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
        console.log(error);
      });
  };
  render() {
    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Data </h4>
        <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className={classes.Input}
            type="email"
            name="email"
            placeholder="Your Mail"
          />
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="Street"
          />
          <input
            className={classes.Input}
            type="text"
            name="postalCode"
            placeholder="Postal Code"
          />
          <Button btnType="Success" type="Success" clicked={this.orderHandler}>
            Order
          </Button>
        </form>
      </div>
    );
  }
}
