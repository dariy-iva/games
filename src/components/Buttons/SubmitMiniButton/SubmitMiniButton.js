import React from "react";
import "./SubmitMiniButton.css";

export default function SubmitMiniButton(props) {
  const {type, text, onClick, className, disabled, name} = props;

  return (
    <button type={type}
            className={`submit-mini-button ${className}`}
            onClick={onClick}
            disabled={disabled}
            aria-label={name || "Submit button"}>
      {text}
    </button>
  );
}