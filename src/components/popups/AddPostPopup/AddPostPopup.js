import React from "react";
import './AddPostPopup.css';
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import SubmitMiniButton from "../../Buttons/SubmitMiniButton/SubmitMiniButton";

export default function AddPostPopup({isOpen = false}) {
  const [selectedGameId, setSelectedGameId] = React.useState([]);
  const [selectedImageSrc, setSelectedImageSrc] = React.useState('');
  const [selectGameIsOpen, setSelectGameIsOpen] = React.useState(false);
  const [isPublicPost, setIsPublicPost] = React.useState(true);

  function handlePublicityChange() {
    setIsPublicPost(!isPublicPost)
  }

  function handleImageChange(e) {
    console.log(URL.createObjectURL(e.target.files[0]))
    setSelectedImageSrc(URL.createObjectURL(e.target.files[0]))
  }

  function handleClosePopup(e) {

  }

  React.useEffect(() => {

  }, [])

  return (
    <PopupWithForm isOpen={isOpen} title="New post" onClose={handleClosePopup}>
        <form name="add-post-form" className="add-post">
          <button
            type="button"
            className="add-post__game-button"
            aria-label="select a game">
            {'Select a Game (Optional)'}
          </button>
          <textarea
            name="add-post-text"
            maxLength="500"
            minLength="5"
            placeholder="What’s new?"
            required rows="5"
            autoFocus={true}
            className="add-post__text">
        </textarea>
          {selectedImageSrc && <img src={selectedImageSrc} alt="poster"/>}
          <fieldset className="add-post__publishing">
            <label className="add-post__label-photo link-hover">
              <input
                name="add-post-image"
                type="file"
                onChange={handleImageChange}
                className="add-post__input-photo"/>
            </label>
            <label className={`add-post__label-public link-hover ${isPublicPost ? '' : 'add-post__label-public_unchecked'}`}>
              <input
                name="add-post-public"
                type="checkbox"
                checked={isPublicPost}
                onChange={handlePublicityChange}
                className="add-post__input-public"/>
              {isPublicPost ? 'Public post' : 'Followers only'}
            </label>
            <SubmitMiniButton type="submit" text="Post" disabled={true} className="add-post__submit-button"/>

          </fieldset>
        </form>
    </PopupWithForm>
  );
}