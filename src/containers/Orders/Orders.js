import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then(res => {
        console.log(res);
        const fetchedData = [];
        for (let key in res.data) {
          fetchedData.push({ ...res.data[key], id: key });
        }
        this.setState({ loading: false, orders: fetchedData });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }
  render() {
    if (this.state.loading) {
      return <Spinner />;
    }
    return (
      <div>
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            ingrediants={order.ingrediants}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
