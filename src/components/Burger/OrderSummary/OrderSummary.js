import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";
const orderSummary = props => {
  console.log(props)
  const ingrediantSummary = Object.keys(props.ingrediants).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingrediants[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingrediants</p>
      <ul>{ingrediantSummary}</ul>
      <strong>
        <p>Total Price is : {props.totalPrice.toFixed(2)}</p>
      </strong>
      <p>continue to checkout</p>
      <Button btnType={"Danger"} clicked={props.purchaseCanceled}>
        Cancel
      </Button>
      <Button btnType={"Success"} clicked={props.purchaseContinued}>
        Continue
      </Button>
    </Aux>
  );
};

export default orderSummary;
