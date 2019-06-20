// Dependencies and imports
import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// Components
import { UserTable } from "./UsersTable";
import { TableRow } from "../TableRow/TableRow";

// Test data
var json = require("../../usersTestData.json");
var jsonLength = Object.keys(json).length;

// Adapter configuration
configure({ adapter: new Adapter() });

/* UserTable Test Suite */
describe("<UserTable/>", () => {
  // 1 - Render no table rows if no user data is present
  it("If users not fetched, should have no table rows", () => {
    expect(shallow(<UserTable users={[]} />).find(TableRow)).toHaveLength(0);
  });

  // 2 - Render # of table rows === to # of length of users array
  it("Should have number of table rows equal to number of users in json file", () => {
    expect(shallow(<UserTable users={json} />).find(TableRow)).toHaveLength(
      jsonLength
    );
  });
});
