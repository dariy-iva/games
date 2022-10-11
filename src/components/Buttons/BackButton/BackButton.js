import React from "react";
import {useNavigate} from "react-router-dom";
import './BackButton.css';

export default function BackButton({className, onClick}) {
  const history = useNavigate();

  function handleBackButtonClick() {
    history(-1);
  }

  return (
    <button type="button" className={`back-button ${className}`} onClick={onClick || handleBackButtonClick} aria-label="Back button"/>
  );
}