import React from "react";
import {NavLink} from "react-router-dom";
import './Menu.css';
import {menuItems} from '../../utils/constants/menuItemMainPageConfig.js'
import {pathsConfig} from "../../utils/constants/stringConstants.js";

export default function Menu() {
  return (
    <nav className="menu">
      <ul className="menu__list menu__list_content_nav">
        {menuItems.map( item => (
          <li className="menu__item" key={item.text}>
            <NavLink
              to={item.link}
              end
              className={(props) =>
                props.isActive
                  ? "menu__text menu__text_weight_normal menu__text_active"
                  : "menu__text menu__text_weight_normal"
              }>
              {item.text}
            </NavLink>
          </li>
        ) )}
      </ul>
      <ul className="menu__list menu__list_content_auth">
        <li className="menu__item">
          <a href={pathsConfig.login} className="menu__text menu__text_weight_bold">
            Log In
          </a>
        </li>
        <li className="menu__text menu__item">
          <a
            href={pathsConfig.register}
            className="menu__text menu__text_weight_bold menu__item_active"
          >
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
}