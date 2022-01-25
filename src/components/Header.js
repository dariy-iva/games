import React from "react";
import logo from "../images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__menu">
        <a href="/">
          <img src={logo} alt="logo" className="header__logo" />
        </a>
        <a href="/" className="menu__text menu__text_weight_bolder">
          partie
        </a>
        <nav className="menu">
          <ul className="menu__list menu__list_content_nav">
            <li className="menu__item">
              <a href="/" className="menu__text menu__text_weight_normal">
                Features
              </a>
            </li>
            <li className="menu__item">
              <a href="/" className="menu__text menu__text_weight_normal">
                Partners
              </a>
            </li>
            <li className="menu__item">
              <a href="/" className="menu__text menu__text_weight_normal">
                Contact
              </a>
            </li>
            <li className="menu__item">
              <a href="/" className="menu__text menu__text_weight_normal">
                Help &amp; Support
              </a>
            </li>
          </ul>
          <ul className="menu__list menu__list_content_auth">
            <li className="menu__item">
              <a href="/" className="menu__text menu__text_weight_bold">
                Log In
              </a>
            </li>
            <li className="menu__text menu__item">
              <a
                href="/"
                className="menu__text menu__text_weight_bold menu__item_active"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__content">
        <h1 className="header__title translation">More Than Matchmaking</h1>
        <button type="button" className="header__button translation"></button>
      </div>
    </header>
  );
}
