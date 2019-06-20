// Type imports
import { User } from "./user";

// Action imports
import {
  GET_USERS_BEGIN,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  getUsersFailure
} from "../redux/actions";

// Get Users Interface
interface getUsersBegin {
  type: typeof GET_USERS_BEGIN;
}

// Get Users Interface
interface getUsersSuccess {
  type: typeof GET_USERS_SUCCESS;
  users: User[];
}

// Get Users Interface
interface getUsersFailure {
  type: typeof GET_USERS_FAILURE;
  error: any;
}

// Export all action interfaces
export type GetUserTypes = getUsersBegin | getUsersSuccess | getUsersFailure;
