import React from "react";
import './ImagePopup.css';
import {GetImagePopupContext, SetImagePopupContext} from "../../../context/ImagePopupContext";

export default function ImagePopup() {
  const imagePopup = React.useContext(GetImagePopupContext);
  const setImagePopup = React.useContext(SetImagePopupContext);
  const {isOpen, imageSrc} = imagePopup;

  function handleClosePopup(e) {
    if (!e.target.classList.contains('image-popup__image')) {
      setImagePopup({isOpen: false, imageSrc});
    }
  }

  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        setImagePopup({isOpen: false, imageSrc});
      }
    };

    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  console.log('image')
  return (
    <div className={`image-popup ${isOpen ? "image-popup_opened" : ""}`} onClick={handleClosePopup}>
      <div className="image-popup__photo-box">
        <img
          src={imageSrc || "#"}
          alt="poster"
          className="image-popup__image"
        />
        <button
          type="button"
          className="image-popup__button-close link-hover"
          aria-label="close image"
        ></button>
      </div>
    </div>
  );
}
