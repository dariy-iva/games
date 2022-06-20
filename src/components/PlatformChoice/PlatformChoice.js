import React from "react";
import "./PlatformChoice.css";

export default function PlatformChoice({setCheckedItemsColors, checkedItemsColors, onPlatformsSubmit}) {
  const platformsInputsConfig = [
    {label: 'PC', name: 'pc', color: '#9C42AB'},
    {label: 'Playstation', name: 'ps', color: '#184292'},
    {label: 'XBOX', name: 'xbox', color: '#077d07'},
    {label: 'Switch', name: 'switch', color: '#EB4335'},
    {label: 'Mobile', name: 'mobile', color: '#6E4AFF'},
  ];

  const [checkedItems, setCheckedItems] = React.useState( [] );

  function handleChangeInput(e) {
    const platform = platformsInputsConfig.find( item => item.name === e.target.name );
    if (e.target.checked) {
      setCheckedItems( [platform.name, ...checkedItems] );
      setCheckedItemsColors( [platform.color, ...checkedItemsColors] );
    } else {
      setCheckedItems( checkedItems.filter( item => item !== platform.name ) );
      setCheckedItemsColors( checkedItemsColors.filter( item => item !== platform.color ) );
    }
  }

  function checkItemStatus(itemName) {
    return checkedItems.includes( itemName ) ? 'checked' : 'not-checked';
  }

  function handleCheckedPlatformsSubmit() {
    onPlatformsSubmit();
  }

  return (
    <>
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
            <span className="user-game-config__text">{platform.label}</span>
          </label>
        ) )}
      </div>
      <button type="button"
              className={`platforms__button ${checkedItems.length > 0 ? 'platforms__button_visible' : 'platforms__button_hidden'}`}
              onClick={handleCheckedPlatformsSubmit}>Continue
      </button>
    </>
  );
}