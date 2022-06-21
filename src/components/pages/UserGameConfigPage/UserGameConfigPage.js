import React from "react";
import {useNavigate} from "react-router-dom";
import "./UserGameConfigPage.css";
import HeaderMain from "../../Headers/HeaderMain/HeaderMain.js";
import PlatformChoice from "../../PlatformChoice/PlatformChoice";
import GamesChoice from "../../GamesChoice/GamesChoice";
import AnimationOverlay from "../../AnimationOverlay/AnimationOverlay";
import {pathsConfig} from "../../../utils/constants/stringConstants";

export default function UserGameConfigPage({}) {
  const history = useNavigate();
  const [colorsForOverlay, setColorsForOverlay] = React.useState( [] );
  const [platformsIsChecked, setPlatformsIsChecked] = React.useState( false );

  function setCheckedItemsColors(colors) {
    setColorsForOverlay( colors );
  }

  function handleCheckedPlatformsSubmit() {
    setPlatformsIsChecked( true );
  }

  function handleCheckedGamesSubmit() {

  }

  return (
    <>
      <HeaderMain/>
      <main className={`user-game-config ${platformsIsChecked ? 'user-game-config_slim' : ''}`}>
        <h1
          className="user-game-config__title">{!platformsIsChecked ? 'Where do you play?' : 'What games do you play?'}</h1>
        <p
          className="user-game-config__description user-game-config__text">{!platformsIsChecked ? 'You can select multiply choices' : 'You can select multiply choices'}</p>
        {!platformsIsChecked &&
          <PlatformChoice setCheckedItemsColors={setCheckedItemsColors} checkedItemsColors={colorsForOverlay}
                          onPlatformsSubmit={handleCheckedPlatformsSubmit}/>}
        {platformsIsChecked &&
          <GamesChoice setCheckedItemsColors={setCheckedItemsColors} checkedItemsColors={colorsForOverlay}
                       onGamesSubmit={handleCheckedGamesSubmit}/>}
      </main>
      {!platformsIsChecked && <AnimationOverlay colors={colorsForOverlay}/>}
    </>
  );
}