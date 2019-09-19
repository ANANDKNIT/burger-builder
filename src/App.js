import React from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/checkout/Checkout";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
