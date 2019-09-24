import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axios-order";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Forms/Input/Input";
export default class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter Your Name"
        },
        value: ""
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street"
        },
        value: ""
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "Zip Code"
        },
        value: ""
      },
      city: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter City"
        },
        value: ""
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter Country"
        },
        value: ""
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Enter E-mail"
        },
        value: ""
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        value: ""
      }
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
      price: this.props.totalPrice
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
    const formArrayElement = [];
    for (let key in this.state.orderForm) {
      formArrayElement.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Data </h4>
        <form>
          {formArrayElement.map((formElement, index) => {
            return (
              <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
              />
            );
          })}

          <Button btnType="Success" type="Success" clicked={this.orderHandler}>
            Order
          </Button>
        </form>
      </div>
    );
  }
}
