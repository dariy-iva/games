import React from "react";
import "./SelectFormSign.css";

export default function SelectFormSign({config, selectOnClick, activeSelect}) {
  const {label, name, options} = config;

  function handleSubmit(e) {
    e.preventDefault();
    // handleRegister(values);
  }

  const [stateSelect, setStateSelect] = React.useState( '' );
  const [currentValueText, setCurrentValueText] = React.useState( label );

  function handleSelectClick(e) {
    selectOnClick(e.target.id);
    // stateSelect === 'active' ? setStateSelect( '' ) : setStateSelect( 'active' );
    activeSelect === name ? setStateSelect( '' ) : setStateSelect( 'active' );
  }

  function handleLabelClick(e) {
    setCurrentValueText( e.target.textContent );
    setStateSelect( '' );
  }

  return (
    <>
      <div className={`select ${name === 'month' ? 'select_name_month' : 'select_name_day-year'}`}
           data-state={stateSelect}>
        <div className={`select__title ${stateSelect === 'active' ? 'select__title_active' : ''}`}
             id={name}
             onClick={handleSelectClick}>{currentValueText}</div>
        <div className="select__container">
          <div className="select__options">
            {options.map( (option, index) => (
              <div key={option}>
                <input id={`${name + '-' + index}`} className="select__option" type="radio" name={name}/>
                <label htmlFor={`${name + '-' + index}`} className="select__label"
                       onClick={handleLabelClick}>{option}</label>
              </div>
            ) )}
          </div>
        </div>
      </div>
    </>
  );
}