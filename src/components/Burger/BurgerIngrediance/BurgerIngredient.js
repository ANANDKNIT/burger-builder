import React from "react";
import PropTypes from "prop-types";
import classes from "./BurgerIngredient.css";
import Aux from "../../../hoc/Aux";

class BurgerIngriance extends React.Component {
  render() {
    let ingrediant = null;
    switch (this.props.type) {
      case "bread-bottom":
        ingrediant = <div className={classes.BreadBottom} />;
        break;
      case "bread-top":
        ingrediant = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
          </div>
        );
        break;
      case "meat":
        ingrediant = <div className={classes.Meat} />;
        break;
      case "cheese":
        ingrediant = <div className={classes.Cheese} />;
        break;
      case "bacon":
        ingrediant = <div className={classes.Bacon} />;
        break;
      case "salad":
        ingrediant = <div className={classes.Salad} />;
        break;
        default:
          ingrediant=ingrediant
    }

    return (<Aux>{ingrediant}</Aux>);
  }
}

BurgerIngriance.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngriance;
