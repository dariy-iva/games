import React from "react";
import './HeaderMain.css';
import Logo from "../../Logo/Logo.js";
import {pathsConfig} from "../../../utils/constants/pathList.js";

export default function HeaderMain({children}) {
  return (
    <header className="header">
        <Logo isSmall={false}>
        <a href={pathsConfig.main} className="header__text">
          games
        </a>
        </Logo>
      {children}
    </header>
  );
}
