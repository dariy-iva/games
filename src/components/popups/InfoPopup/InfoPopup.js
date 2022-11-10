import React from "react";
import "./InfoPopup.css";
import successStatusImg from "../../../images/success_status.svg";
import errorStatusImg from "../../../images/error_status.svg";
import {InfoPopupContext} from "../../../context/InfoPopupContext";
import {infoPopupStatus} from "../../../utils/constants/textConstants";

export default function InfoPopup() {
  const {infoPopup, setInfoPopup} = React.useContext(InfoPopupContext);
  const {isOpen, status, text} = infoPopup;

  function closeInfoPopup() {
    setInfoPopup({isOpen: false, status, text});
  }

  React.useEffect(() => {
    if (infoPopup.isOpen) {
      setTimeout(closeInfoPopup, 5000);
    }
  }, [infoPopup.isOpen])

  return (
    <div className={`info-popup ${isOpen ? 'info-popup_visible' : ''}`}>
      <div className="info-popup__content">
        <img
          src={status === infoPopupStatus.success ? successStatusImg : errorStatusImg}
          alt={status === infoPopupStatus.success ? "Yoo-hoo" : "Oops"}
          className="info-popup__img-status"
        />
        <div className="info-popup__info">
          <h6 className="info-popup__title">{status === infoPopupStatus.success ? "Yoo-hoo!" : "Oops!"}</h6>
          <p className="info-popup__text">{text}</p>
        </div>
        {/*<button type="button" className="popup__reset-button"/>*/}
      </div>
    </div>
  );
}