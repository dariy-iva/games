import React from "react";
import './AddPostPopup.css';
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import SelectGamesForm from "../../Forms/SelectGamesForm/SelectGamesForm";
import AddPostForm from "../../Forms/AddPostForm/AddPostForm";
import {GetAddPostPopupContext, SetAddPostPopupContext} from "../../../context/AddPostPopupContext";
import {GamesContext} from "../../../context/GamesContext";
import {connect} from "react-redux";
import {addPost} from "../../../redux/slices/postsSlice";

function AddPostPopup({users, addPost}) {
  const addPostPopup = React.useContext(GetAddPostPopupContext);
  const setAddPostPopup = React.useContext(SetAddPostPopupContext);
  const {isOpen} = addPostPopup;
  const gamesList = React.useContext(GamesContext);

  const [selectGameIsOpen, setSelectGameIsOpen] = React.useState(false);
  const [selectedGame, setSelectedGame] = React.useState(null);

  function handleClosePopup(e) {
    setAddPostPopup({isOpen: false});
    setSelectGameIsOpen(false);
    setSelectedGame(null);
    document.forms['add-post-form'].reset();
  }

  function toggleSelectGameStatus() {
    setSelectGameIsOpen(!selectGameIsOpen);
  }

  function handleReselectGame() {
    setSelectedGame(null);
    setSelectGameIsOpen(false);
  }

  function handleSelectGame(selectedItemId) {
    const newSelectedGame = gamesList.find(game => game.id === selectedItemId);

    setSelectedGame(newSelectedGame);
    setSelectGameIsOpen(false);
  }

  function handleAddPostSubmit(dataPost) {
    const {text, isPublic, imageSrc} = dataPost;

    addPost({
      authorId: users.currentUser.id,
      selectedGameId: selectedGame?.id || '',
      text: text,
      isPublic: isPublic,
      file: imageSrc
    });

    handleClosePopup();
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      title={selectGameIsOpen ? "Choose a game" : "New post"}
      onClose={handleClosePopup}>

      {selectGameIsOpen && (
        <div className="select-game">
          <button
            type="button"
            className="select-game__button select-game__button_do_back link-hover"
            onClick={toggleSelectGameStatus}
            aria-label="back to form"/>
          <button
            type="button"
            className="select-game__button select-game__button_do_reselect"
            onClick={handleReselectGame}
            aria-label="deselect">
            None
          </button>
          <SelectGamesForm
            onSubmit={handleSelectGame}
            isMultipleSelect={false}
            selectedGames={selectedGame ? [selectedGame.id] : []}/>
        </div>
      )}
      <div className={`add-post-form-container ${!selectGameIsOpen ? 'add-post-form-container_opened' : ''}`}>
        <AddPostForm
          selectedGame={selectedGame}
          onSelectGameClick={toggleSelectGameStatus}
          onSubmit={handleAddPostSubmit}
        />
      </div>
    </PopupWithForm>
  );
}

export default connect(
  (state) => ({
    users: state.users,
  }),
  {addPost}
)(AddPostPopup);