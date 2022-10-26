import React from "react";
import {connect} from "react-redux";
import "./InfoPopup.css";
import successStatusImg from "../../images/success_status.svg";
import errorStatusImg from "../../images/error_status.svg";
import {closeInfoPopup} from "../../redux/slices/supportSlice";

function InfoPopup(props) {
  const {support, closeInfoPopup} = props;
  const {infoPopupIsOpen, statusInfoPopup, textInfoPopup} = support;

  React.useEffect(() => {
    const timeout = setTimeout(closeInfoPopup, 5000);
    return () => {clearTimeout(timeout)}
  })

  return (
    <div className={`popup ${infoPopupIsOpen ? 'popup_visible' : ''}`}>
      <div className="popup__content">
        <img
          src={statusInfoPopup === 'success' ? successStatusImg : errorStatusImg}
          alt={statusInfoPopup === 'success' ? "Yoo-hoo" : "Oops"}
          className="popup__img-status"
        />
        <div className="popup__info">
          <h6 className="popup__title">{statusInfoPopup === 'success' ? "Yoo-hoo!" : "Oops!"}</h6>
          <p className="popup__text">{textInfoPopup}</p>
        </div>
        {/*<button type="button" className="popup__reset-button"/>*/}
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    support: state.support,
  }),
  {closeInfoPopup}
)(InfoPopup);