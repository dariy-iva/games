import React from "react";
import {Link, NavLink} from "react-router-dom";
import './MainMenu.css';
import {mainMenuItems} from '../../../utils/constants/menuItemsConfig.js';
import Logo from "../../Logo/Logo";

export default function MainMenu() {

  return (
    <nav className="main-menu">
      <Logo isSmall={true}/>
      <ul className="main-menu__list">
        {mainMenuItems.map( item => (
          <li className="main-menu__item" key={item.text}>
            <NavLink
              to={item.link}
              end
              className={(props) =>
                props.isActive
                  ? `main-menu__link main-menu__link_content_${item.text.toLowerCase()} main-menu__link_active`
                  : `main-menu__link main-menu__link_content_${item.text.toLowerCase()}`
              }>
              {item.text.toLowerCase() === 'notifications' && <span className="main-menu__label">99+</span>}
              {item.text}
            </NavLink>
          </li>
        ) )}
      </ul>
    </nav>
  );
}