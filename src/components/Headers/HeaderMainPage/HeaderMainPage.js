import React from "react";
import './HeaderMainPage.css';
import Logo from "../../Logo/Logo.js";
import Menu from "../../Menu/Menu.js";
import {pathsConfig} from "../../../utils/constants/stringConstants.js";

export default function HeaderMainPage() {
  return (
      <header className="header">
        <div className="header__menu">
          <Logo isSmall={false}/>
          <a href={pathsConfig.main} className="header__text">
            games
          </a>
          <Menu/>
        </div>
        <div className="header__content">
          <h1 className="header__title translation">More Than Matchmaking</h1>
          <button type="button" className="header__button translation"></button>
        </div>
      </header>
  );
}
