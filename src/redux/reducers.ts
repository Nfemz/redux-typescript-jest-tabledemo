// Action interface and type improts
import { GetUserTypes } from "../types/action.types";
import UserState from "../types/userstate";

// Actions
import {
  GET_USERS_BEGIN,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from "./actions";

// Initial State
let userState: UserState = {
  users: [],
  loading: true,
  error: null
};

// Reducer
export default function getUsersReducer(
  state = userState,
  action: GetUserTypes
) {
  switch (action.type) {
    case GET_USERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        users: []
      };
    default:
      return state;
  }
}

// Export root reducer
export type AppState = ReturnType<typeof getUsersReducer>;
