import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";
// import
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
const buildControls = props => {
  console.log(props, "from BUIld COntrol");
  return (
    <div className={classes.BuildControls}>
      {controls.map(ctrl => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            disabled={props.disabled[ctrl.type]}
            added={() => props.ingrediantAdded(ctrl.type)}
            removed={() => props.ingrediantRemoved(ctrl.type)}
          />
        );
      })}
    </div>
  );
};

export default buildControls;
