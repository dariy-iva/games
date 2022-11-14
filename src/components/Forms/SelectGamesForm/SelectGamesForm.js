import React from "react";
import "./SelectGamesForm.css";
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton";
import {GamesContext} from "../../../context/GamesContext";

export default function SelectGamesForm(props) {
  const {onSubmit, isMultipleSelect, selectedGames} = props;

  const gamesList = React.useContext(GamesContext);

  const [filteredGames, setFilteredGames] = React.useState(gamesList);
  const [checkedItemsId, setCheckedItemsId] = React.useState(selectedGames || []);
  const [searchValue, setSearchValue] = React.useState('');

  function handleChangeInput(e) {
    const targetId = +e.target.id.split('-')[1];

    if (checkedItemsId.includes(targetId)) {
      setCheckedItemsId(checkedItemsId.filter(item => item !== targetId));
    } else {
      isMultipleSelect
        ? setCheckedItemsId([targetId, ...checkedItemsId])
        : setCheckedItemsId([targetId]);
    }
  }

  function getItemStatus(itemId) {
    return checkedItemsId.includes(itemId) ? 'checked' : 'not-checked';
  }

  function handleChangeSearch(e) {
    setSearchValue(e.target.value);
  }

  function handleCheckedGamesSubmit(e) {
    e.preventDefault();
    const data = isMultipleSelect ? checkedItemsId : checkedItemsId[0];
    onSubmit(data);
  }

  function filterGames(string) {
    setFilteredGames(gamesList
      .filter(game => game.label.toLowerCase().includes(string.toLowerCase()))
    );
  }

  React.useEffect(() => {
    filterGames(searchValue);
  }, [searchValue]);

  return (
    <form name={`${isMultipleSelect ? 'select-games' : 'select-game'}`} className="form-games">
      <label className="form-games__search">
        <input
          value={searchValue}
          type="text"
          className="form-games__input-search"
          name="search"
          minLength="1"
          maxLength="30"
          onChange={handleChangeSearch}
          placeholder="Search"
        />
      </label>
      <fieldset className="form-games__items">
        {filteredGames.map(game => (
          <label
            className={`form-games__item`}
            key={game.name}
            status={getItemStatus(game.id)}>
            <input
              type="checkbox"
              className="form-games_input-check"
              name={game.name}
              checked={checkedItemsId.includes(game.id)}
              id={`game-${game.id}`}
              onChange={handleChangeInput}
            />
            <img
              src={game.image}
              className="form-games__image"
              alt={`game ${game.label} poster`}/>
            <span className="form-games__label">{game.label}</span>
          </label>
        ))}
        {!filteredGames.length && <span className="user-game-config__text">No games with this name found</span>}
      </fieldset>
      <SubmitButton
        type='submit'
        className={`form-games__button ${checkedItemsId.length > 0 ? 'form-games__button_visible' : 'form-games__button_hidden'}`}
        text="Continue"
        onClick={handleCheckedGamesSubmit}/>
    </form>
  );
}