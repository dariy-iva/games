import React from "react";
import {useNavigate} from "react-router-dom";
import './MainPage.css';
import HeaderMain from "../Headers/HeaderMain/HeaderMain.js";
import Menu from "../Menu/Menu.js";
import MainVideo from "../MainVideo/MainVideo";
import TokenAuthButtons from "../TokenAuthButtons/TokenAuthButtons";
import Button from "../Button/Button";
import AnimationOverlay from "../AnimationOverlay/AnimationOverlay.js";
import {pathsConfig} from "../../utils/constants/pathList.js";

export default function MainPage({onLogin}) {
  const history = useNavigate();

  const colorsForOverlay = ["#6E4AFF", "#9C42AB"];
  const [videoIsOpen, setVideoIsOpen] = React.useState(false);

  function handleOpenVideo() {
    setVideoIsOpen(true);
  }

  function handleRegisterButtonClick() {
    history( pathsConfig.register );
  }

  function handleLoginButtonClick() {
    history( pathsConfig.login );
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
          <Button type="button" text="Sign up to Games" disabled={false} onClick={handleRegisterButtonClick} className="splash-screen__register" />
          <Button type="button" text="Log in" disabled={false} onClick={handleLoginButtonClick} className="splash-screen__login" />
          <TokenAuthButtons onLogin={onLogin} />
        </div>
      </main>
      <AnimationOverlay colors={colorsForOverlay} isOverlayColor={true}/>
    </>
  );
}