import React from "react";
import "./Button.css";

export default function Button(props) {
  const {type, text, onClick, className, disabled} = props;

  return (
    <button type={type}
            className={`button ${className}`}
            onClick={onClick} disabled={disabled}>{text}
    </button>
  );
}