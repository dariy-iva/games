import React from "react";
import "./SubmitButton.css";

export default function SubmitButton(props) {
  const {type, text, onClick, className, disabled} = props;

  return (
    <button type={type}
            className={`button neon-box-shadow ${className}`}
            onClick={onClick} disabled={disabled}>{text}
    </button>
  );
}