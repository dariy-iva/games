import React from "react";
import logo from "../images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__menu">
      <a href="/">
        <img src={logo} alt="logo" className="header__logo link-hover" />
      </a>
      <a
        href="/"
        className="menu__text menu__text_weight_bolder link-hover"
      >
        partie
      </a>
      <nav className="menu">
        <ul className="menu__list menu__list_content_nav">
          <li className="menu__item">
            <a
              href="/"
              className="menu__text menu__text_weight_normal link-hover"
            >
              Features
            </a>
          </li>
          <li className="menu__item">
            <a
              href="/"
              className="menu__text menu__text_weight_normal link-hover"
            >
              Partners
            </a>
          </li>
          <li className="menu__item">
            <a
              href="/"
              className="menu__text menu__text_weight_normal link-hover"
            >
              Contact
            </a>
          </li>
          <li className="menu__item">
            <a
              href="/"
              className="menu__text menu__text_weight_normal link-hover"
            >
              Help &amp; Support
            </a>
          </li>
        </ul>
        <ul className="menu__list menu__list_content_auth">
          <li className="menu__item">
            <a
              href="/"
              className="menu__text menu__text_weight_bold link-hover"
            >
              Log In
            </a>
          </li>
          <li className="menu__text menu__item menu__item_active">
            <a
              href="/"
              className="menu__text menu__text_weight_bold link-hover"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
      </div>      
      <h1 className="header__title translation">More Than Matchmaking</h1>
      <button type="button" className="header__button translation"></button>
    </header>
  );
}
