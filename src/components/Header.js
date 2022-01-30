import React from "react";
import logo from "../images/logo.svg";

const colors = ["#6E4AFF", "#9C42AB", "#184292", "#EB4335", "#077d07"];
const lines = [];

for (let i = 0; i < 30; i++) {
  const line = {
    height: `${Math.round(Math.random() * (200 - 30) + 30)}px`,
    borderColor: `${colors[Math.round(Math.random() * (1 - 0) + 0)]}`,
    opacity: `.${Math.round(Math.random() * (9 - 3) + 3)}`,
    borderWidth: `${Math.round(Math.random() * (3 - 1) + 1)}px`,
    top: `${Math.round(Math.random() * ((90 - 0) - 0) + 0)}%`,
    left: `${Math.round(Math.random() * (100 - 0) + 0)}%`,
    // animationDelay: `${Math.round(Math.random() * (10 - 0) + 0)}s`,
  };
  lines.push(line);
}

export default function Header() {
  return (
    <>
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
      <div className="overlay">
      <ul className="overlay__field translationLines">
        {lines.map((line) => (
          <li
            className="overlay__line"
            style={line}
            key={lines.indexOf(line)}
          ></li>
        ))}
      </ul>
      <ul className="overlay__field translationLines1">
        {lines.map((line) => (
          <li
            className="overlay__line"
            style={line}
            key={lines.indexOf(line)}
          ></li>
        ))}
      </ul>
      </div>
      
    </>
  );
}
