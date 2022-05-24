import React from "react";
import './MainPage.css';
import HeaderMainPage from "../Headers/HeaderMainPage/HeaderMainPage.js";
import AnimationOverlay from "../AnimationOverlay/AnimationOverlay.js";

export default function MainPage() {
  return (
    <>
      <HeaderMainPage/>
      <AnimationOverlay/>
    </>
  );
}