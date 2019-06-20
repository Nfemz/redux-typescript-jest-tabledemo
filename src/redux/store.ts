// Redux imports
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import getUsersReducer from "./reducers";

// Store creation
const store = createStore(getUsersReducer, applyMiddleware(thunk));

export default store;
