import React from "react";
import './Header.css';
import logo from "../../images/logo.svg";
import Menu from "../Menu/Menu.js";

export default function Header() {
  return (
      <header className="header">
        <div className="header__menu">
          <a href="/">
            <img src={logo} alt="logo" className="header__logo"/>
          </a>
          <a href="/" className="header__text">
            partie
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
