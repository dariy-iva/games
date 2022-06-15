import React from "react";
import './MainPage.css';
import HeaderMain from "../Headers/HeaderMain/HeaderMain.js";
import Menu from "../Menu/Menu.js";
import AnimationOverlay from "../AnimationOverlay/AnimationOverlay.js";

export default function MainPage() {
  return (
    <>
      <HeaderMain>
        <Menu/>
      </HeaderMain>
      <main className="splash-screen">
        <h1 className="splash-screen__title translation">More Than Matchmaking</h1>
        <button type="button" className="splash-screen__button translation"/>
      </main>
      <AnimationOverlay/>
    </>
  );
}