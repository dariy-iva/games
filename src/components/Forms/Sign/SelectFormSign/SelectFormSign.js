import React from "react";
import "./SelectFormSign.css";

export default function SelectFormSign({config, onChange, selectOnClick, activeSelect}) {
  const {label, name, options} = config;
  const [stateSelect, setStateSelect] = React.useState( '' );
  const [currentValueText, setCurrentValueText] = React.useState( label );

  React.useEffect( () => {
    activeSelect === name ? setStateSelect('active') : setStateSelect('');
  }, [activeSelect]);

  function handleSelectClick(e) {
    stateSelect === 'active' ? selectOnClick( null ) : selectOnClick( e.target.id );
  }

  function handleLabelClick(e) {
    setCurrentValueText( e.target.textContent );
    selectOnClick( null );
  }

  return (
    <>
      <div className={`select ${name === 'month' ? 'select_name_month' : 'select_name_day-year'}`}
           data-state={stateSelect}>
        <div
          className={`select__title ${stateSelect === 'active' ? 'select__title_active' : ''}`}
          id={name}
          onClick={handleSelectClick}>{currentValueText}</div>
        <div className="select__container">
          <div className="select__options">
            {options.map( (option, index) => (
              <div key={option}>
                <input id={`${name + '-' + index}`} className="select__option" type="radio" name={name} value={option} onChange={onChange}/>
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