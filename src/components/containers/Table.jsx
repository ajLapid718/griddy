// set up Table;
import React, { Component } from "react";
import TableRow from "../views/TableRow";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      amountOfRows: 2
    }
  }

  render() {
    let rows = [];

    for (let i = 0; i < this.state.amountOfRows; i++) {
      rows.push(<TableRow />);
    }

    return (
      <div>
        <h1>amount of rows: {this.state.amountOfRows}</h1>
        <table>
          {rows}
        </table>
      </div>
    )
  }
}

export default Table;