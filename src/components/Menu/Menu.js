import React from "react";
import {Link, NavLink} from "react-router-dom";
import './Menu.css';
import {menuItems} from '../../utils/constants/menuItemMainPageConfig.js'
import {pathsConfig} from "../../utils/constants/pathList.js";

export default function Menu() {
  return (
    <nav className="menu">
      <ul className="menu__list menu__list_content_nav">
        {menuItems.map( item => (
          <li className="menu__item" key={item.text}>
            <NavLink
              to={pathsConfig.login}
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
          <Link to={pathsConfig.login} className="menu__text menu__text_weight_bold">
            Log In
          </Link>
        </li>
        <li className="menu__text menu__item">
          <Link
            to={pathsConfig.register}
            className="menu__text menu__text_weight_bold menu__item_active neon-box-shadow"
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}