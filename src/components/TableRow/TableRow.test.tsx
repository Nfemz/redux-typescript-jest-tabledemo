// Dependencies and imports
import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// Components
import { TableRow } from "../TableRow/TableRow";

// Test Data
var rowHTML = (
  <tr>
    <td>Nick</td>
    <td>femianicholas@gmail.com</td>
    <td>San Francisco</td>
    <td>Smart Money</td>
  </tr>
);
// Adapter configuration
configure({ adapter: new Adapter() });

//UserRow Test
describe("<TableRow/>", () => {
  // Test that component is receiving props and rendering correctly
  it("Successfully receives props and displays them", () => {
    expect(
      shallow(
        <TableRow
          name="Nick"
          email="femianicholas@gmail.com"
          city="San Francisco"
          company="Smart Money"
        />
      ).contains(rowHTML)
    ).toEqual(true);
  });
});
