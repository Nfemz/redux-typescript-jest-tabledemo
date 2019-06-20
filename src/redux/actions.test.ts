// Action imports
import { getUsersBegin, getUsersSuccess, getUsersFailure } from "./actions";
import {
  GET_USERS_BEGIN,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from "./actions";

/* Test data */
// Users json
var json = require("../usersTestData.json");

/* Actions Test Suite */
describe("Tests all actions", () => {
  // 1 - Tests getUserBegin Action
  it("Tests getUsersBegin", () => {
    const expectedAction = {
      type: GET_USERS_BEGIN
    };
    expect(getUsersBegin()).toEqual(expectedAction);
  });

  // 2 - Tests getUserSuccess Action
  it("Tests getUsersSuccess", () => {
    const expectedAction = {
      type: GET_USERS_SUCCESS,
      users: json
    };
    expect(getUsersSuccess(json)).toEqual(expectedAction);
  });

  // 3 - Tests getUserFailure Action
  it("Tests getUsersFailure", () => {
    const expectedAction = {
      type: GET_USERS_FAILURE,
      error: {}
    };
    expect(getUsersFailure({})).toEqual(expectedAction);
  });
});
