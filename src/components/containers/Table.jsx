// set up Table;
import React, { Component } from "react";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      amountOfRows: 2
    }
  }

  render() {
    return (
      <div>
        <h1>hello world!!!</h1>
        <h1>amount of rows: {this.state.amountOfRows}</h1>
      </div>
    )
  }
}

export default Table;