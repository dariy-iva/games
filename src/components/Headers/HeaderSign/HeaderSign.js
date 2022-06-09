import React from "react";
import {Link, NavLink} from "react-router-dom";
import './HeaderSign.css';
import Logo from '../../Logo/Logo.js';
import {pathsConfig} from "../../../utils/constants/stringConstants.js";

export default function HeaderSign() {
  return (
    <header className="header-sign-page">
      <Logo isSmall={true}/>
      <nav className="header-sign-page__nav">
        <NavLink
          to={pathsConfig.login}
          end
          className={(props) =>
            props.isActive
              ? "header-sign-page__link header-sign-page_active"
              : "header-sign-page__link"
          }>
          Log In
        </NavLink>
        <NavLink
          to={pathsConfig.register}
          end
          className={(props) =>
            props.isActive
              ? "header-sign-page__link header-sign-page_active"
              : "header-sign-page__link"
          }>
          Sign Up
        </NavLink>
      </nav>
    </header>
  );
}