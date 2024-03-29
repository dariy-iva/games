import React from "react";
import {useNavigate} from "react-router-dom";
import './StartPage.css';
import HeaderMain from "../../Headers/HeaderMain/HeaderMain.js";
import StartMenu from "../../Menu/StartMenu/StartMenu.js";
import MainVideo from "../../MainVideo/MainVideo";
import TokenAuthButtons from "../../TokenAuthButtons/TokenAuthButtons";
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton";
import AnimationOverlay from "../../AnimationOverlay/AnimationOverlay.js";
import {pathsConfig} from "../../../utils/constants/pathList.js";

export default function StartPage({onLogin}) {
  const history = useNavigate();

  const colorsForOverlay = ["#6E4AFF", "#9C42AB"];
  const [videoIsOpen, setVideoIsOpen] = React.useState(false);

  function handleOpenVideo() {
    setVideoIsOpen(true);
  }

  function handleRegisterButtonClick() {
    history(pathsConfig.register);
  }

  function handleLoginButtonClick() {
    history(pathsConfig.login);
  }

  return (
    <>
      <HeaderMain>
        <StartMenu/>
      </HeaderMain>
      <main className="splash-screen">
        <div className="splash-screen__logo">
          <p className="splash-screen__name">games</p>
        </div>
        <h1
          className={`splash-screen__title translationDownToCenter ${videoIsOpen ? 'translationCenterToUp' : ''}`}>More
          Than Matchmaking</h1>
        <button type="button"
                className={`splash-screen__button translationDownToCenter neon-box-shadow ${videoIsOpen ? 'translationCenterToUp' : ''}`}
                onClick={handleOpenVideo} aria-label="Open video button"/>
        {videoIsOpen && <MainVideo/>}
        <div className="splash-screen__container">
          <SubmitButton type="button" text="Sign up to Games" disabled={false} onClick={handleRegisterButtonClick}
                        className="splash-screen__register" name="Sign up"/>
          <SubmitButton type="button" text="Log in" disabled={false} onClick={handleLoginButtonClick}
                        className="splash-screen__login" name="Log in"/>
          <TokenAuthButtons onLogin={onLogin}/>
        </div>
      </main>
      <AnimationOverlay colors={colorsForOverlay} isOverlayColor={true}/>
    </>
  );
}