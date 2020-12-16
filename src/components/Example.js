import React, { Component } from "react";
import Product from "./product";

export class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0,
    };
  }

  buy = () => {
    // alert("You added book!!!");
    this.setState({
      qty: this.state.qty + 1,
    });
    this.props.handleTotal(this.props.price);
  };

  show = () => {
    this.props.handleShow(this.props.name);
  };

  render() {
    const { qty } = this.state;
    const { name, price } = this.props;
    return (
      <div>
        <h6>
          {name} Tutorial Book {price}
        </h6>
        <button onClick={this.buy}>Buy</button>&nbsp;&nbsp;
        <button onClick={this.show}>Show</button>
        <h3>Total Quantity : {qty}</h3>
        <hr />
      </div>
    );
  }
}

export default Example;
