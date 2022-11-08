import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  const history = useNavigate();

  function handleBackClick() {
    history(-1);
  }

  return (
    <div className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">
        Oops! Page not found
      </p>
      <button type="button" className="not-found__button-redirect" onClick={handleBackClick}>
        Back to the fun
      </button>
    </div>
  );
}