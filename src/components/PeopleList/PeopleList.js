import React from "react";
import {connect} from "react-redux";
import './PeopleList.css';
import avatar from "../../images/userAvatars/standart-user-avatar.webp";

function PeopleList({users}) {
  const [menuIsOpen, setMenuIsOpen] = React.useState(true);
  const [friendsList, setFriendsList] = React.useState([]);

  function handleCollapseMenuButtonClick() {
    setMenuIsOpen(!menuIsOpen);
  }

  function handleAddFriendClick() {
  }

  function handleFriendItemClick(e) {
    console.log(e.currentTarget.id);
  }

  React.useEffect(() => {
    const friends = [];
    users.currentUser.friendsIdList.forEach(friendId => {
      const friend = users.usersList.find(user => user.id === friendId);
      friends.push(friend);
    })
    setFriendsList([...friends]);
  }, [users.currentUser.friendsIdList]);

  return (
    <section className="people">
      <div className="people__header">
        <p className={`people__title people__collapse ${menuIsOpen ? '' : 'people__collapse_collapsed'}`}>People</p>
        <button type="button" onClick={handleCollapseMenuButtonClick}
                className={`people__button ${menuIsOpen ? '' : 'people__button_collapse'}`}></button>
      </div>
      <ul className="people__list">
        <li onClick={handleAddFriendClick}
            className={`people__friend  ${menuIsOpen ? '' : 'people__friend_collapsed'}`}>
          <div className="people__image people__image_invite"></div>

          <div className={`people__info people__collapse ${menuIsOpen ? '' : 'people__collapse_collapsed'}`}>
            <p className="people__name">Invite friends</p>
          </div>
        </li>

        {friendsList.map(friend => (
          <li key={friend.id} onClick={handleFriendItemClick} id={friend.id}
              className={`people__friend  ${menuIsOpen ? '' : 'people__friend_collapsed'}`}>
            <div className="people__avatar">
              <img src={friend.avatar || avatar} alt="avatar" className="people__image"/>
            </div>

            <div className={`people__info people__collapse ${menuIsOpen ? '' : 'people__collapse_collapsed'}`}>
              <p className="people__name">{friend.name}</p>
              <p className="people__level">{friend.level} level</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default connect(
  (state) => ({
    users: state.users,
  }),
  {}
)(PeopleList);