//Dependencies
import React from "react";
import { Component } from "react";
// Redux
import { connect } from "react-redux";
import { getUsers } from "./redux/actions";
// Types
import { AppState } from "./redux/reducers";
// Components
import UsersTable from "./components/UsersTable/UsersTable";
// CSS
import "./App.css";

// Application Props Interface
interface AppProps {
  getUsers: typeof getUsers;
  error: any;
  loading: Boolean;
}

// Application
export class App extends Component<AppProps> {
  // On component mount fires action to fetch all users
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    let body;
    // Render loading body if loading: true
    if (this.props.loading === true) {
      body = (
        <div className="alert alert-warning row justify-content-center align-items-center">
          <div>Retrieving user data...</div>
          <div className="ml-2 spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
      // Render data not found if error: {}
    } else if (this.props.error !== null) {
      body = (
        <div className="alert alert-danger">
          User data cannot be found. Are you connected to the internet?
        </div>
      );
      // If loading: false, error: null, load table w/ fetched data
    } else {
      body = <UsersTable />;
    }

    // Rendered content
    return (
      <div className="App">
        <div className="container mt-4">{body}</div>
      </div>
    );
  }
}

// Export and connect to redux store
export default connect(
  (state: AppState) => ({
    loading: state.loading,
    error: state.error
  }),
  { getUsers }
)(App);
