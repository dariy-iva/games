import React from "react";
import "./InfoPopup.css";
import successStatusImg from "../../images/success_status.svg";
import errorStatusImg from "../../images/error_status.svg";
import {InfoPopupContext} from "../../context/InfoPopupContext";
import {infoPopupStatus} from "../../utils/constants/textConstants";

export default function InfoPopup() {
  const {infoPopup, setInfoPopup} = React.useContext(InfoPopupContext);
  const {isOpen, status, text} = infoPopup;

  function closeInfoPopup() {
    setInfoPopup({});
  }

  React.useEffect(() => {
    const timeout = setTimeout(closeInfoPopup, 5000);
    return () => {clearTimeout(timeout)}
  })

  return (
    <div className={`popup ${isOpen ? 'popup_visible' : ''}`}>
      <div className="popup__content">
        <img
          src={status === infoPopupStatus.success ? successStatusImg : errorStatusImg}
          alt={status === infoPopupStatus.success ? "Yoo-hoo" : "Oops"}
          className="popup__img-status"
        />
        <div className="popup__info">
          <h6 className="popup__title">{status === infoPopupStatus.success ? "Yoo-hoo!" : "Oops!"}</h6>
          <p className="popup__text">{text}</p>
        </div>
        {/*<button type="button" className="popup__reset-button"/>*/}
      </div>
    </div>
  );
}