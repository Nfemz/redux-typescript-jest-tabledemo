// Redux imports
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import getUsersReducer from "./reducers";

// Store creation
const store = createStore(
  getUsersReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
