import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import './HeaderSign.css';
import Logo from '../../Logo/Logo.js';
import BackButton from "../../BackButton/BackButton";
import {pathsConfig} from "../../../utils/constants/pathList.js";

export default function HeaderSign() {
  const location = useLocation();
  const isPasswordRecoveryPage = location.pathname === pathsConfig.resetPassword;
  const isRegisterPage = location.pathname === pathsConfig.register;

  return (
    <>
      <header className="header-sign-page header-sign-page_version_desktop">
        <Logo isSmall={true}/>
        {isPasswordRecoveryPage
          ? (<>
            <BackButton className="header-sign-page__back" />
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
      <header className="header-sign-page header-sign-page_version_mobile">
        <BackButton />
        <p className="header-sign-page__text">{isPasswordRecoveryPage ? 'Reset Password' : isRegisterPage ? 'Sign up to Games' : 'Log in to Games' }</p>
      </header>
    </>
  );
}