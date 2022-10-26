import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {pathsConfig} from "../../utils/constants/pathList";

function ProtectedRoute({user, children}) {
  const loggedIn = (user.name && user.password);

  return loggedIn ? children : <Navigate to={pathsConfig.login}/>;
}

export default connect(
  (state) => ({
    user: state.user,
  }),
)(ProtectedRoute);