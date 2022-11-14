import React from "react";
import './FeedSection.css';
import SubmitMiniButton from "../Buttons/SubmitMiniButton/SubmitMiniButton";
import Post from "../Post/Post";
import {connect} from "react-redux";
import {SetAddPostPopupContext} from "../../context/AddPostPopupContext";

function FeedSection({posts}) {
  const [postsList, setPostsList] = React.useState([]);
  const setAddPostPopup = React.useContext(SetAddPostPopupContext);

  function handleOpenAddPostPopup() {
    setAddPostPopup({isOpen: true});
  }

  React.useEffect(() => {
    setPostsList(posts.postItemsList
      .filter(item => item.type === "post")
      .sort((a, b) => b.time - a.time));
  }, [posts.postItemsList]);

  return (
    <>
      <section className="feed">
        <div className="feed__menu">
          <SubmitMiniButton type="button" text="+&nbsp;Post" name="add post" onClick={handleOpenAddPostPopup}/>
        </div>

        <ul className="posts__list">
          {postsList.map(post => (
              <li key={`post-${post.id}`}>
                <Post post={post}/>
              </li>
            )
          )}
        </ul>
      </section>
    </>
  );
}

export default connect(
  (state) => ({
    posts: state.posts,
  }),
)(FeedSection);