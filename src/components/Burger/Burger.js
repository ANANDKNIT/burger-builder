import React from "react";
import classes from "./Burger.css"
import BurgerIngriance from "./BurgerIngrediance/BurgerIngredient";
const burger =(props) => {

    return (<div className={classes.Burger}>
<BurgerIngriance type="bread-top"/>
<BurgerIngriance type="cheese"/>

<BurgerIngriance type="bread-bottom"/>
    </div>)
}

export default burger;
