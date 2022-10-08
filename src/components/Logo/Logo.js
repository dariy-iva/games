import React from "react";
import './Logo.css';
import logo from "../../images/logo.svg";
import {pathsConfig} from "../../utils/constants/pathList";

export default function Logo({isSmall}) {
  return (
    <a href={pathsConfig.main} className={`logo neon-box-shadow ${isSmall ? 'logo_size_small' : 'logo_size_large'}`}>
      <img src={logo} alt="logo" className={`${isSmall ? 'logo__image_size_small' : 'logo__image_size_large'}`}/>
    </a>
  );
}