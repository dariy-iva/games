import React from "react";
import './Header.css';
import logo from "../../images/logo.svg";
import {menuItems} from '../../utils/constants.js'

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
              {menuItems.map(item => (
                 <li className="menu__item">
                   <a href={item.link} key={item.text} className="menu__text menu__text_weight_normal">
                     {item.text}
                   </a>
                 </li>
              ))}
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
      
    </>
  );
}
