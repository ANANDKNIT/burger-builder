import React from "react";
import classes from "./Order.css";
const order = props => {
  const ingrediants = [];
  for (let ingrediantsName in props.ingrediants) {
    ingrediants.push({
      name: ingrediantsName,
      amount: props.ingrediants[ingrediantsName]
    });
  }

  const ingrediantsOutput = ingrediants.map(ig => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: "capitalize",
          margin: "0 8px",
          border: "1px solid #cccc",
          padding: "5px"
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>Ingrediants: {ingrediantsOutput} </p>

      <p>
        Price: <strong>{props.price} </strong> Rupees Only/
      </p>
    </div>
  );
};

export default order;
