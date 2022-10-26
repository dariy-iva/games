import React from "react";
import {Link} from "react-router-dom";
import './HeaderMain.css';
import Logo from "../../Logo/Logo.js";
import {pathsConfig} from "../../../utils/constants/pathList.js";

export default function HeaderMain({children}) {
  return (
    <header className="header">
        <Logo isSmall={false}>
        <Link to={pathsConfig.start} className="header__text">
          games
        </Link>
        </Logo>
      {children}
    </header>
  );
}
