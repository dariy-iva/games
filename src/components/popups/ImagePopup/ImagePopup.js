import React from "react";
import './ImagePopup.css';
import ContainerPopup from "../ContainerPopup/ContainerPopup";
import {GetImagePopupContext, SetImagePopupContext} from "../../../context/ImagePopupContext";

export default function ImagePopup() {
  const imagePopup = React.useContext(GetImagePopupContext);
  const setImagePopup = React.useContext(SetImagePopupContext);
  const {isOpen, imageSrc} = imagePopup;

  function handleClosePopup(e) {
    setImagePopup({isOpen: false, imageSrc});
  }

  return (
    <ContainerPopup isOpen={isOpen} isImage={true} onClose={handleClosePopup}>
      <img
        src={imageSrc || "#"}
        alt="poster"
        className="image-popup__image"
      />
      <button
        type="button"
        className="image-popup__button-close link-hover"
        aria-label="close image"
        onClick={handleClosePopup}
      ></button>
    </ContainerPopup>
  );
}
