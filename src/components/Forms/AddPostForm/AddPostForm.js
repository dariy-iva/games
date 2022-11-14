import React from "react";
import './AddPostForm.css';
import SubmitMiniButton from "../../Buttons/SubmitMiniButton/SubmitMiniButton";
import {inputErrors} from "../../../utils/constants/textConstants";

export default function AddPostForm(props) {

  const {selectedGame, onSelectGameClick, onSubmit} = props;

  const [textValue, setTextValue] = React.useState('');
  const [selectedImageFile, setSelectedImageFile] = React.useState(null);
  const [isPublicPost, setIsPublicPost] = React.useState(true);
  const [isValidForm, setIsValidForm] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  function handlePublicityChange() {
    setIsPublicPost(!isPublicPost)
  }

  function handleImageInputChange(e) {
    const file = e.target.files[0];

    if (file.type.includes('image')) {
      setSelectedImageFile(e.target.files[0]);
    } else {
      setErrors({...errors, [e.target.name]: inputErrors.formatImageError});
      setTimeout(() => {
        setErrors({...errors, [e.target.name]: ''});
      }, 5000);
    }
  }

  function handleTextValueChange(e) {
    setTextValue(e.target.value);
    setIsValidForm(e.target.checkValidity());
    setErrors({...errors, [e.target.name]: e.target.validationMessage});
  }

  function handleSelectedImageDelete() {
    setSelectedImageFile(null);
  }

  function resetForm() {
    setTextValue('');
    setSelectedImageFile(null);
    setIsPublicPost(true);
    setIsValidForm(false);
    setErrors({});
  }

  function handleAddPostSubmit(e) {
    e.preventDefault();

    onSubmit({
      text: textValue,
      isPublic: isPublicPost,
      imageSrc: selectedImageFile ? URL.createObjectURL(selectedImageFile) : ''
    });

    resetForm();
  }

  return (
    <form name="add-post-form" className="add-post" onReset={resetForm}>
      <button
        type="button"
        className={`add-post__game-button ${selectedGame ? 'add-post__game-button_selected' : ''}`}
        aria-label="select a game"
        onClick={onSelectGameClick}>
        {selectedGame &&
          <>
            <div
              style={{backgroundImage: `url(${selectedGame.image})`}}
              className="add-post__game-blur"/>
            <div
              style={{backgroundImage: `url(${selectedGame.image})`}}
              className="add-post__game-image"/>
          </>
        }
        <span className="add-post__game-label">
                {selectedGame ? selectedGame.label : 'Select a Game (Optional)'}
              </span>
      </button>
      <label className="add-post__text-label">
        <textarea
          name="add-post-text"
          value={textValue}
          onChange={handleTextValueChange}
          maxLength="500"
          minLength="5"
          placeholder="What’s new?"
          required rows="5"
          autoFocus={true}
          className="add-post__text">
        </textarea>
        <span className="input__error add-post__error add-post__error-text">{errors['add-post-text']}</span>
      </label>
      {selectedImageFile &&
        <div className="add-post__image-box">
          <img
            src={URL.createObjectURL(selectedImageFile) || '#'}
            alt="users image to post"
            className="add-post__load-image"/>
          <button
            type="button"
            className="add-post__delete-button"
            onClick={handleSelectedImageDelete}
            aria-label="delete image"/>
        </div>
      }
      <fieldset className="add-post__publishing">
        <label className="add-post__label-photo link-hover" title="Upload an image">
          <input
            name="add-post-image"
            type="file"
            value={selectedImageFile?.webkitRelativePath || ''}
            onChange={handleImageInputChange}
            className="add-post__input-photo"/>
        </label>
        <span
          className={`input__error add-post__error ${errors['add-post-image'] ? 'add-post__error_input-file' : ''}`}>
          {errors['add-post-image']}
        </span>
        <label
          className={`add-post__label-public ${isPublicPost ? '' : 'add-post__label-public_unchecked'}`}>
          <input
            name="add-post-public"
            type="checkbox"
            checked={isPublicPost}
            onChange={handlePublicityChange}
            className="add-post__input-public"/>
          {isPublicPost ? 'Public post' : 'Followers only'}
        </label>
        <SubmitMiniButton
          type="submit"
          text="Post"
          disabled={!isValidForm}
          onClick={handleAddPostSubmit}
          className="add-post__submit-button"/>
      </fieldset>
    </form>
  );
}