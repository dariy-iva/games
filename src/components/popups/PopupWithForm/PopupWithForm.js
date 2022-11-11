import React from "react";
import './PopupWithForm.css';
import ContainerPopup from "../ContainerPopup/ContainerPopup";

export default function PopupWithForm(props) {
  const {isOpen, onClose, title, children} = props;

  return (
    <ContainerPopup isOpen={isOpen} onClose={onClose}>
      <h2 className="popup__title">{title}</h2>
      {children}
      <button
        type="button"
        className="popup__button-close link-hover"
        aria-label="close popup"
        onClick={onClose}/>
    </ContainerPopup>
  );
}