import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngrediance/BurgerIngredient";
const burger = props => {
  console.log(props.ingrediants);
  let transformedIngrediant = Object.keys(props.ingrediants)
    .map(ingKeys => {
      return [...Array(props.ingrediants[ingKeys])].map((item, index) => {
        return <BurgerIngredient type={ingKeys} key={ingKeys + index} />;
      });
    })
    .reduce((preVal, currVal) => {
      return preVal.concat(currVal);
    }, []);

  if (transformedIngrediant.length === 0) {
    transformedIngrediant = <p>Please start adding ingrediant</p>;
  }
  console.log(transformedIngrediant);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngrediant}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
