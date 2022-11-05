import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";
import {pathsConfig} from "../../../utils/constants/pathList";

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">
        Oops! Page not found
      </p>
      <Link className="not-found__link-redirect" to={pathsConfig.main}>
        Back to the fun
      </Link>
    </div>
  );
}