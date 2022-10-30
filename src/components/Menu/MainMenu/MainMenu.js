import React from "react";
import {Link, NavLink} from "react-router-dom";
import './MainMenu.css';
import {mainMenuItems} from '../../../utils/constants/menuItemsConfig.js';
import Logo from "../../Logo/Logo";
import avatar from "../../../images/userAvatars/standart-user-avatar.webp";
import {connect} from "react-redux";

function MainMenu({users}) {
  const [userAvatarLink, setUserAvatarLink] = React.useState('');

  React.useEffect(() => {
    setUserAvatarLink(users.currentUser.avatar);
  }, [users.currentUser.avatar])

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
              {item.text.toLowerCase() === 'profile' && <img alt="avatar" src={userAvatarLink || avatar} className="main-menu__avatar"/>}
              <span className="main-menu__text">{item.text}</span>
            </NavLink>
          </li>
        ) )}
      </ul>
    </nav>
  );
}

export default connect(
  (state) => ({
    users: state.users,
  }),
  {}
)(MainMenu);