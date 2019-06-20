// Dependencies and imports
import React from "react";
import ReactDOM from "react-dom";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Components
import App from "./App";

// CSS
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
