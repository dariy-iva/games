import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {pathsConfig} from "../../utils/constants/pathList";

function ProtectedRoute({users, children}) {
  const loggedIn = (users.currentUser.name && users.currentUser.password);

  return loggedIn ? children : <Navigate to={pathsConfig.login}/>;
}

export default connect(
  (state) => ({
    users: state.users,
  }),
)(ProtectedRoute);