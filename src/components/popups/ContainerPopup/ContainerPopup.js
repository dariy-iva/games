import React from "react";
import './ContainerPopup.css';

export default function ContainerPopup(props) {
  const {isOpen, isImage = false, onClose, children} = props;

  function handleClosePopupByClickOverlay(e) {
    if (e.target.classList.contains('popup_opened')) {
      onClose();
    }
  }

  function handleClosePopupByEscape(e) {
    if (e.key === "Escape") {
      onClose();
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", handleClosePopupByEscape);
    return () => document.removeEventListener("keydown", handleClosePopupByEscape);
  }, []);

  const popupClass = `popup ${isOpen ? "popup_opened" : ''} ${isImage ? 'popup_content_image' : 'popup_content_form'}`;
  const popupContainerClass = `popup__container ${isImage ? '' : 'popup__container_with-form'}`;

  return (
    <div className={popupClass} onMouseDown={handleClosePopupByClickOverlay}>
      <div className={popupContainerClass}>
        {children}
      </div>
    </div>
  );
}