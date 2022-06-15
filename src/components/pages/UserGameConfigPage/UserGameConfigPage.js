import React from "react";
// import {useNavigate } from "react-router-dom";
import "./UserGameConfigPage.css";
import HeaderMain from "../../Headers/HeaderMain/HeaderMain.js";
import {pathsConfig} from "../../../utils/constants/stringConstants";

export default function UserGameConfigPage({handleResetPassword}) {
  const platformsInputsConfig = [
    {label: 'PC', name: 'pc',},
    {label: 'Playstation', name: 'ps',},
    {label: 'XBOX', name: 'xbox',},
    {label: 'Switch', name: 'switch',},
    {label: 'Mobile', name: 'mobile',},
  ];
  const [checkedItems, setCheckedItems] = React.useState( [] );

  function handleChangeInput(e) {
    e.target.checked
      ? setCheckedItems( [e.target.name, ...checkedItems] )
      : setCheckedItems( checkedItems.filter( item => item !== e.target.name ) );
    console.log( checkedItems )
  }

  function handleCheckedPlatformsSubmit() {

  }

  return (
    <>
      <HeaderMain/>
      <main className="platforms">
        <h1 className="platforms__title">Where do you play?</h1>
        <p className="platform__description platform__text">You can select multiply choices</p>
        <div className="platforms__items">
          {platformsInputsConfig.map( platform => (
            <label className="platforms__label platform__text" key={platform.name}>
              <input
                type="checkbox"
                className="platforms__input"
                name={platform.name}
                onChange={handleChangeInput}
              />
              {platform.label}
            </label>
          ) )}
        </div>
        {}
        <button type="button"
                className={`platforms__button ${checkedItems.length > 0 ? 'platforms__button_visible' : 'platforms__button_hidden'}`}
                onClick={handleCheckedPlatformsSubmit}>Continue
        </button>
      </main>
    </>
  );
}