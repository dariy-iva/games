import React from "react";
import './MainPage.css';
import HeaderMain from "../Headers/HeaderMain/HeaderMain.js";
import Menu from "../Menu/Menu.js";
import MainVideo from "../MainVideo/MainVideo";
import TokenAuthButtons from "../TokenAuthButtons/TokenAuthButtons";
import AnimationOverlay from "../AnimationOverlay/AnimationOverlay.js";

export default function MainPage({onLogin}) {
  const colorsForOverlay = ["#6E4AFF", "#9C42AB"];
  const [videoIsOpen, setVideoIsOpen] = React.useState(false);

  function handleOpenVideo() {
    setVideoIsOpen(true);
  }

  return (
    <>
      <HeaderMain>
        <Menu/>
      </HeaderMain>
      <main className="splash-screen">
        <h1 className={`splash-screen__title translationDownToCenter ${videoIsOpen ? 'translationCenterToUp' : ''}`}>More Than Matchmaking</h1>
        <button type="button" className={`splash-screen__button translationDownToCenter neon-box-shadow ${videoIsOpen ? 'translationCenterToUp' : ''}`} onClick={handleOpenVideo}/>
        {videoIsOpen && <MainVideo />}
        <div className="splash-screen__container">
          <TokenAuthButtons onLogin={onLogin} />
        </div>
      </main>
      <AnimationOverlay colors={colorsForOverlay} isOverlayColor={true}/>
    </>
  );
}