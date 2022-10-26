import React from "react";
import {Link} from "react-router-dom";
import './Logo.css';
import logo from "../../images/logo.svg";
import {pathsConfig} from "../../utils/constants/pathList";

export default function Logo({isSmall, children}) {
  return (
    <div className="logo">
      <Link to={pathsConfig.start} className={`logo__link neon-box-shadow ${isSmall ? 'logo__link_size_small' : 'logo__link_size_large'}`}>
        <img src={logo} alt="logo" className={`logo__image ${isSmall ? 'logo__image_size_small' : 'logo__image_size_large'}`}/>
      </Link>
      {children}
    </div>

  );
}