import React from "react";
import './Post.css';
import {connect} from "react-redux";
import {convertDateToText} from "../../utils/convertDateToText";
import {GamesContext} from "../../context/GamesContext";

function Post({post, users}) {
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

  const author = getUserById(authorId);
  const game = selectedGameId ? getGameById(selectedGameId) : '';

  const likesElementClassName = `post__social-item post__social-item_content_likes
            ${likesUserId.includes(users.currentUser.id)
    ? 'post__social-item_content_likes-active'
    : ''}`;

  function getUserById(id) {
    return users.usersList.find(user => user.id === id);
  }

  function getGameById(id) {
    return gamesList.find(game => game.id === id);
  }

  return (
    <article className="post">
      <div className="post__header">
        <img src={author.avatar} alt="user avatar" className="post__user-avatar"/>
        <div className="post__info">
          <p className="post__user-name">{author.name}</p>
          <span className="post__text post__time">
                        {game && <span className="post__game">{game.label}</span>}
            {convertDateToText(time)}
                      </span>
        </div>
      </div>
      <p className="post__text post__main-text">{text}</p>
      {imgFile && <img src={imgFile} alt="poster" className="post__image"/>}
      <div className="post__social">
        <button
          type="button"
          className={likesElementClassName}
          aria-label="like">
        </button>
        <span className="post__text post__num">{likesUserId.length}</span>
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
  }),
  {}
)(Post);