import React from "react";
import classes from "./Burger.css";
import BurgerIngriance from "./BurgerIngrediance/BurgerIngredient";
const burger = props => {
    console.log(props.ingrediant)
  const transformedIngrediant = Object.keys(props.ingrediant).map(ingKeys => {
    console.log(ingKeys, "firstmap");
    return [...Array(props.ingrediant[ingKeys])].map((item, index) => {
      console.log(item, index, "secondmap", "name of ingrediant:");
      return <BurgerIngriance type={ingKeys} key={ingKeys + index} />;
    });
  });

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
