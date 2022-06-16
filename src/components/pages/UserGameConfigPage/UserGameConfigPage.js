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
    if (e.target.checked) {
      setCheckedItems( [e.target.name, ...checkedItems] );
    } else {
      setCheckedItems( checkedItems.filter( item => item !== e.target.name ) );
    }
  }

  function checkItemStatus(itemName) {
    return checkedItems.includes( itemName ) ? 'checked' : 'not-checked';
  }

  function handleCheckedPlatformsSubmit() {

  }

  return (
    <>
      <HeaderMain/>
      <main className="platforms">
        <h1 className="platforms__title">Where do you play?</h1>
        <p className="platforms__description platforms__text">You can select multiply choices</p>
        <div className="platforms__items">
          {platformsInputsConfig.map( platform => (
            <label className={`platforms__label platforms__label_content_${platform.name}`} key={platform.name}
                   status={checkItemStatus( platform.name )}>
              <input
                type="checkbox"
                className="platforms__input"
                name={platform.name}
                onChange={handleChangeInput}
              />
              <span className="platforms__text">{platform.label}</span>
            </label>
          ) )}
        </div>
        <button type="button"
                className={`platforms__button ${checkedItems.length > 0 ? 'platforms__button_visible' : 'platforms__button_hidden'}`}
                onClick={handleCheckedPlatformsSubmit}>Continue
        </button>
      </main>
    </>
  );
}