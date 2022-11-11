import React from "react";
import './ContainerPopup.css';

export default function ContainerPopup(props) {
  const {isOpen, isImage = false, onClose, children} = props;

  function handleClosePopupByClickOverlay(e) {
    if (e.target.classList.contains('popup_opened')) {
      onClose();
    }
  }

  React.useEffect(() => {
    const closePopupByEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", closePopupByEscape);
    return () => document.removeEventListener("keydown", closePopupByEscape);
  }, []);

  const popupClass = `popup ${isOpen ? "popup_opened" : ''} ${isImage ? 'popup_content_image' : 'popup_content_form'}`;
  const popupContainerClass = `popup__container ${isImage ? '' : 'popup__container_with-form'}`;

  return (
    <div className={popupClass} onClick={handleClosePopupByClickOverlay}>
      <div className={popupContainerClass}>
        {children}
      </div>
    </div>
  );
}