import React from "react";
import classes from "./Burger.css";
import BurgerIngriance from "./BurgerIngrediance/BurgerIngredient";
const burger = props => {
  console.log(props.ingrediant);
  let transformedIngrediant = Object.keys(props.ingrediant)
    .map(ingKeys => {
      return [...Array(props.ingrediant[ingKeys])].map((item, index) => {
        return <BurgerIngriance type={ingKeys} key={ingKeys + index} />;
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
      <BurgerIngriance type="bread-top" />
      {transformedIngrediant}
      <BurgerIngriance type="bread-bottom" />
    </div>
  );
};

export default burger;
