import React from "react";
import "./GamesChoice.css";
import {gameList} from "../../utils/constants/gameList.js";

export default function GamesChoice({}) {
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

  function handleChangeSearch() {

  }

  function handleCheckedGamesSubmit() {

  }

  return (
    <>
      <section className="games">
        <label className="games__search">
          <input
            type="text"
            className="games__input-search"
            name="search"
            minLength="1"
            maxLength="30"
            onChange={handleChangeSearch}
            placeholder="Search"
          />
        </label>
        <div className="games__items">
          {gameList.map( game => (
              <label className={`games__item`} key={game.name}
                     status={checkItemStatus( game.name )}>
                <input
                  type="checkbox"
                  className="games__input-check"
                  name={game.name}
                  onChange={handleChangeInput}
                />
                <img src={game.image} className="games__image" alt="image game"/>
                <span className="games__title">{game.label}</span>
              </label>
          ) )}
        </div>
      </section>
    </>
  );
}