import React from "react";
import "./GamesChoice.css";
import Button from "../Button/Button";
import {gameList} from "../../utils/constants/gameList.js";

export default function GamesChoice({}) {
  const [checkedItems, setCheckedItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [games, setGames] = React.useState(gameList);

  function handleChangeInput(e) {
    if (e.target.checked) {
      setCheckedItems([e.target.name, ...checkedItems]);
    } else {
      setCheckedItems(checkedItems.filter(item => item !== e.target.name));
    }
  }

  function checkItemStatus(itemName) {
    return checkedItems.includes(itemName) ? 'checked' : 'not-checked';
  }

  function handleChangeSearch(e) {
    setSearchValue(e.target.value);
  }

  function handleCheckedGamesSubmit() {

  }

  function filterGames(string) {
    setGames(gameList.filter(game => game.label.toLowerCase().includes(string.toLowerCase())));
  }

  React.useEffect(() => {
    filterGames(searchValue);
  }, [searchValue]);

  return (
    <>
      <section className="games">
        <label className="games__search">
          <input
            value={searchValue}
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
          {games.map(game => (
            <label className={`games__item`} key={game.name}
                   status={checkItemStatus(game.name)}>
              <input
                type="checkbox"
                className="games__input-check"
                name={game.name}
                onChange={handleChangeInput}
              />
              <img src={game.image} className="games__image" alt="image game"/>
              <span className="games__title">{game.label}</span>
            </label>
          ))}
        </div>
        <Button
          type='button'
          className={`games__button ${checkedItems.length > 0 ? 'games__button_visible' : 'games__button_hidden'}`}
          text="Continue" onClick={handleCheckedGamesSubmit}/>
      </section>
    </>
  );
}