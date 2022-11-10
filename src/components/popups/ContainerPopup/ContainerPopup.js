import React from "react";
import './ContainerPopup.css';

export default function ContainerPopup({isOpen, title, children}) {

  const popupClass = `popup ${isOpen && "popup_opened"}`;

  return (
    <div className={popupClass}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        {children}
        <button
          type="button"
          className="popup__button-close link-hover"
          aria-label="close popup"></button>
      </div>
    </div>
  );
}