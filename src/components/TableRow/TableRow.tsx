// Imports and dependencies
import React from "react";

// Table Row Interface
interface TableRowProps {
  name: string;
  email: string;
  city: string;
  company: string;
}

// Table Row
export const TableRow: React.FC<TableRowProps> = props => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.city}</td>
      <td>{props.company}</td>
    </tr>
  );
};
export default TableRow;
