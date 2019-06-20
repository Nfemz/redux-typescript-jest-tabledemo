// Type imports
import { User } from "../types/user";

// Action exports
export const GET_USERS_BEGIN = "GET_USERS_BEGIN";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

// Actions
export const getUsersBegin = () => ({
  type: GET_USERS_BEGIN
});

export const getUsersSuccess = (users: User[]) => ({
  type: GET_USERS_SUCCESS,
  users
});

export const getUsersFailure = (error: any) => ({
  type: GET_USERS_FAILURE,
  error
});

// Combine Get Users Action
export function getUsers(): any {
  return (dispatch: any) => {
    // Start action -> set loading: true
    dispatch(getUsersBegin());
    // Fetch data
    return (
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res =>
          res.json().then(json => {
            // Return users, set loading: false
            dispatch(getUsersSuccess(json));
            return json.users;
          })
        )
        // If error, return empty array, set loading false, return error object
        .catch(error => dispatch(getUsersFailure(error)))
    );
  };
}
