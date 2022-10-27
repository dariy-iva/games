import React from "react";
import {useNavigate} from "react-router-dom";
import "./StartButton.css";
import SubmitButton from "../SubmitButton/SubmitButton";
import {pathsConfig} from "../../../utils/constants/pathList";

export default function StartButton() {
  const history = useNavigate();

  function handleStartServiceClick() {
    history(pathsConfig.main);
  }

  return (
    <SubmitButton type="button" text="Start" onClick={handleStartServiceClick} className="start-button"
                  disabled={false} name="Service start button"/>
  );
}