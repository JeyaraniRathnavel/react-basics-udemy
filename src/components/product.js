import React, { Component } from "react";
import Example from "./Example";
import Total from "./Total";

export class product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
    };
  }

  calculateTotal = (price) => {
    this.setState({
      total: this.state.total + price,
    });
    alert(this.state.total);
  };

  show = (name) => {
    alert("you have selected" + name);
  };
  render() {
    return (
      <div>
        <Example
          name="Java"
          price={100}
          handleShow={this.show}
          handleTotal={this.calculateTotal}
        />
        <Example
          name="c++"
          price={100}
          handleShow={this.show}
          handleTotal={this.calculateTotal}
        />
        <Example
          name="C"
          price={100}
          handleShow={this.show}
          handleTotal={this.calculateTotal}
        />
        <Total total={this.state.total} />
      </div>
    );
  }
}

export default product;
