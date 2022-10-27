import React from "react";
import './PeopleList.css';

export default function PeopleList() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(true);

  function handleCollapseMenuButtonClick() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <section className="people">
      <div className="people__header">
        <p className="people__title">People</p>
        <button type="button" onClick={handleCollapseMenuButtonClick} className={`people__button ${menuIsOpen ? '' : 'people__button_collapse'}`}></button>
      </div>
      <ul className="people__list">

      </ul>
    </section>
  );
}