import React from "react";
import './Post.css';
import {connect} from "react-redux";
import {updatePostItems} from "../../redux/slices/postsSlice";
import {convertDateToText} from "../../utils/convertDateToText";
import {GamesContext} from "../../context/GamesContext";
import {SetImagePopupContext} from "../../context/ImagePopupContext";

function Post({post, users, updatePostItems}) {
  const {
    authorId,
    time,
    text,
    imgFile,
    selectedGameId,
    likesUserId,
    kidsId
  } = post;
  const gamesList = React.useContext(GamesContext);
  const setImagePopup = React.useContext(SetImagePopupContext);

  const author = getUserById(authorId);
  const game = selectedGameId ? getGameById(selectedGameId) : '';
  const isLiked = likesUserId.includes(users.currentUser.id);

  const likesElementClassName = `post__social-item post__social-item_content_likes
            ${isLiked
    ? 'post__social-item_content_likes-active'
    : ''}`;

  function getUserById(id) {
    return users.usersList.find(user => user.id === id);
  }

  function getGameById(id) {
    return gamesList.find(game => game.id === id);
  }


  function handleToggleLike(e) {
    e.stopPropagation();
    const updatePost = JSON.parse(JSON.stringify(post));
    if (isLiked) {
      updatePost.likesUserId.splice(updatePost.likesUserId.indexOf(users.currentUser.id), 1);
    } else {
      updatePost.likesUserId.push(users.currentUser.id);
    }
    updatePostItems(updatePost);
  }

  function handleOpenImage(e) {
    e.stopPropagation();
    setImagePopup({isOpen: true, imageSrc: imgFile});
  }

  function handlePostClick() {}

  return (
    <article className="post" onClick={handlePostClick}>
      <div className="post__header">
        <img
          src={author.avatar}
          alt="user avatar"
          className="post__user-avatar"
        />
        <div className="post__info">
          <p className="post__user-name">{author.name}</p>
          <span className="post__text post__time">
            {game && <span className="post__game">{game.label}</span>}
            {convertDateToText(time)}
          </span>
        </div>
      </div>
      <p className="post__text post__main-text">{text}</p>
      {imgFile && <img
        src={imgFile}
        alt="poster"
        className="post__image"
        onClick={handleOpenImage}
      />}
      <div className="post__social">
        <button
          type="button"
          className={likesElementClassName}
          aria-label="like"
          onClick={handleToggleLike}
        >
        </button>
        <span className={`post__text post__num ${isLiked ? 'post__num_active' : ''}`}>
          {likesUserId.length}
        </span>
        <button
          type="button"
          className="post__social-item post__social-item_content_comments"
          aria-label="comments">
        </button>
        <span className="post__text post__num">{kidsId.length}</span>
      </div>
    </article>
  );
}

export default connect(
  (state) => ({
    users: state.users,
    posts: state.posts,
  }),
  {updatePostItems}
)(Post);