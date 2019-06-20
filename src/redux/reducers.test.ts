// Action imports
import {
  GET_USERS_BEGIN,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  getUsers
} from "./actions";
// Reducer import
import getUsersReducer from "./reducers";

const json = require("../usersTestData.json");

/* Reducers Test Suite */
describe("Test users reducer", () => {
  // 1 - Tests initial state
  it("Should return the intial state", () => {
    expect(getUsersReducer(undefined, {})).toEqual({
      users: [],
      loading: true,
      error: null
    });
  });

  // 2 - Tests handling of GET_USERS_BEGIN
  it("Should handle GET_USERS_BEGIN", () => {
    expect(
      getUsersReducer(
        {},
        {
          type: GET_USERS_BEGIN
        }
      )
    ).toEqual({
      loading: true,
      error: null
    });
  });

  // 3 - Tests handling of GET_USERS_SUCCESS
  it("Should handle GET_USERS_SUCCESS", () => {
    expect(
      getUsersReducer(
        {},
        {
          type: GET_USERS_SUCCESS,
          users: json
        }
      )
    ).toEqual({
      loading: false,
      users: json
    });
  });

  // 4 - Tests handling of GET_USERS_FAILURE
  it("Should handle GET_USERS_FAILURE", () => {
    expect(
      getUsersReducer(
        {},
        {
          type: GET_USERS_FAILURE
        }
      )
    ).toEqual({
      loading: false,
      error: undefined,
      users: []
    });
  });
});
