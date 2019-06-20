// Dependencies and imports
import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// Components
import { App } from "./App";
import UsersTable from "./components/UsersTable/UsersTable";
import { getUsers } from "./redux/actions";

/* Test data */
// Users json
var json = require("./usersTestData.json");
// Loading HTML
var loadingHTML = (
  <div className="alert alert-warning row justify-content-center align-items-center">
    <div>Retrieving user data...</div>
    <div className="ml-2 spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);
// Failure HTML
var failureHTML = (
  <div className="alert alert-danger">
    User data cannot be found. Are you connected to the internet?
  </div>
);

// Adapter configuration
configure({ adapter: new Adapter() });

/* App Test Suite */
describe("<App/>", () => {
  // 1 - Renders loading animation if loading: true and error: null
  it("If loading: true and error: null, renders only the loading animation", () => {
    expect(
      shallow(<App error={null} loading={true} getUsers={getUsers()} />, {
        disableLifecycleMethods: true
      }).contains(loadingHTML)
    ).toEqual(true);
  });

  // 2 - Renders loading animation if loading: true and error: {any}
  it("If loading: true and error: {any}, renders only the loading animation", () => {
    expect(
      shallow(<App error={{}} loading={true} getUsers={getUsers()} />, {
        disableLifecycleMethods: true
      }).contains(loadingHTML)
    ).toEqual(true);
  });

  // 3 - Renders failure to load if loading: false and error: {any}
  it("If loading: false and error: {any}, renders only the loading animation", () => {
    expect(
      shallow(<App error={{}} loading={false} getUsers={getUsers()} />, {
        disableLifecycleMethods: true
      }).contains(failureHTML)
    ).toEqual(true);
  });

  // 4 - Does not render loading content if loading: false
  it("If loading: false and error: {any}, does not render loading animation", () => {
    expect(
      shallow(<App error={{}} loading={false} getUsers={getUsers()} />, {
        disableLifecycleMethods: true
      }).contains(loadingHTML)
    ).toEqual(false);
  });

  // 5 - Does not render failure content if error: null
  it("If loading: false and error: null, does not render failure message", () => {
    expect(
      shallow(<App error={null} loading={false} getUsers={getUsers()} />, {
        disableLifecycleMethods: true
      }).contains(failureHTML)
    ).toEqual(false);
  });

  // 6 - Loads <UserTable/> if loading: false and error: null
  it("If loading: false and error: null, renders only the loading animation", () => {
    expect(
      shallow(<App error={null} loading={false} getUsers={getUsers()} />, {
        disableLifecycleMethods: true
      }).contains(<UsersTable />)
    ).toEqual(true);
  });
});
