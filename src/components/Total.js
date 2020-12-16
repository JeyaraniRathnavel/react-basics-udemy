import React, { Component } from "react";
import Product from "./product";

export class Total extends Component {
  render() {
    return <div>Total Cash:{this.props.total}</div>;
  }
}

export default Total;
