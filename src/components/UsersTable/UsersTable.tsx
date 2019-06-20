// Dependencies and imports
import React, { Component } from "react";
// Types
import { User } from "../../types/user";
// Components
import TableRow from "../TableRow/TableRow";
import { connect } from "react-redux";
import { AppState } from "../../redux/reducers";

// Table Interface
interface TableProps {
  users: User[];
}

// Table Row
export class UserTable extends Component<TableProps> {
  render() {
    return (
      <div className="table-responsive">
        <table className="table table-bordered table-hover table-striped">
          <thead className="thead-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col">Company</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(user => (
              <TableRow
                key={user.id}
                name={user.name}
                email={user.email}
                city={user.address.city}
                company={user.company.name}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default connect((state: AppState) => ({
  users: state.users
}))(UserTable);
