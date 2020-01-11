// set up Table;
import React, { Component } from "react";
import TableRow from "../views/TableRow";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      amountOfRows: 2,
      amountOfColumns: 5
    }
  }

  handleAddRow = () => {
    this.setState({amountOfRows: this.state.amountOfRows + 1})
  }

  handleAddColumn = () => {
    this.setState({amountOfColumns: this.state.amountOfColumns + 1})
  }

  render() {
    let rows = [];

    for (let i = 0; i < this.state.amountOfRows; i++) {
      rows.push(<TableRow amountOfColumns={this.state.amountOfColumns} />);
    }

    return (
      <div>
        <h1>amount of rows: {this.state.amountOfRows}</h1>
        <h1>amount of columns: {this.state.amountOfColumns}</h1>
        <button onClick={this.handleAddRow}>Add Row</button>
        <button onClick={this.handleAddColumn}>Add Column</button>
        <table>
          {rows}
        </table>
      </div>
    )
  }
}

export default Table;