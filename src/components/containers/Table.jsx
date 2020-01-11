// set up Table;
import React, { Component } from "react";
import TableRow from "../views/TableRow";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      amountOfRows: 2,
      amountOfColumns: 5,
      selectedColor: "red"
    }
  }

  handleAddRow = () => {
    this.setState({amountOfRows: this.state.amountOfRows + 1})
  }

  handleAddColumn = () => {
    this.setState({amountOfColumns: this.state.amountOfColumns + 1})
  }

  handleRemoveRow = () => {
    this.setState({amountOfRows: this.state.amountOfRows - 1});
  }

  handleRemoveColumn = () => {
    this.setState({amountOfColumns: this.state.amountOfColumns - 1});
  }

  handleColorChange = (event) => {
    this.setState({selectedColor: event.target.value});
  }

  handleApplyColor = (event) => {
    event.target.style.backgroundColor = this.state.selectedColor;
  }

  render() {
    let rows = [];

    for (let i = 0; i < this.state.amountOfRows; i++) {
      rows.push(<TableRow amountOfColumns={this.state.amountOfColumns} selectedColor={this.state.selectedColor} handleApplyColor={this.handleApplyColor} />);
    }

    return (
      <div>
        <h1>amount of rows: {this.state.amountOfRows}</h1>
        <h1>amount of columns: {this.state.amountOfColumns}</h1>
        <h1>selected color: {this.state.selectedColor}</h1>
        <button onClick={this.handleAddRow}>Add Row</button>
        <button onClick={this.handleAddColumn}>Add Column</button>
        <button onClick={this.handleRemoveRow}>Remove Row</button>
        <button onClick={this.handleRemoveColumn}>Remove Column</button>
        <select onChange={this.handleColorChange}>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
        </select>
        <table>
          {rows}
        </table>
      </div>
    )
  }
}

export default Table;