import React from "react";
import {Link, NavLink} from "react-router-dom";
import './HeaderSign.css';
import Logo from '../../Logo/Logo.js';

export default function HeaderSign() {
  return (
    <header className="header-sign-page">
      <Logo isSmall={true}/>
      <nav className="header-sign-page__nav">
        <NavLink
          to="/signin"
          end
          className={(props) =>
            props.isActive
              ? "header-sign-page__link header-sign-page_active"
              : "header-sign-page__link"
          }>
          Log In
        </NavLink>
        <NavLink
          to="/signup"
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