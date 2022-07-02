import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import './HeaderSign.css';
import Logo from '../../Logo/Logo.js';
import {pathsConfig} from "../../../utils/constants/pathList.js";

export default function HeaderSign({onBackButtonClick}) {
  const location = useLocation();
  const isPasswordRecoveryPage = location.pathname === pathsConfig.resetPassword;

  return (
    <header className="header-sign-page">
      <Logo isSmall={true}/>
      {isPasswordRecoveryPage
        ? (<>
          <button type="button" className="header-sign-page__button-back" onClick={onBackButtonClick}/>
          <p className="header-sign-page__text">Reset Password</p>
        </>)
        : (<nav className="header-sign-page__nav">
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
        </nav>)}
    </header>
  );
}