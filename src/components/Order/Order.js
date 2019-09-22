import React from "react";
import classes from "./Order.css";
const order = props => {
  return (
    <div className={classes.Order}>
      <p>Ingrediants: Salad</p>
      <p>
        Price: <strong>Rupees 55</strong>
      </p>
    </div>
  );
};

export default order;
