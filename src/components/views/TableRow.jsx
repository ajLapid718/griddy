// set up TableRow;
import React from "react";
import TableCell from "../views/TableCell";

function TableRow(props) {
  let cells = [];
  
  for (let i = 0; i < props.amountOfColumns; i++) {
    cells.push(<TableCell />)
  }
  
  return <tr>{cells}</tr>
}

export default TableRow;