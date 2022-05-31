import React from "react";
import "./SelectFormSign.css";

export default function SelectFormSign({value, onChange, config, error, pattern}) {
  const {label, type, minLength = null, maxLength = null, name, placeholder, options} = config;

  function handleSubmit(e) {
    e.preventDefault();
    // handleRegister(values);
  }

//   const selectSingle = document.querySelector('.__select');
//   const selectSingle_title = selectSingle.querySelector('.__select__title');
//   const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');
//
// // Close when click to option
//   for (let i = 0; i < selectSingle_labels.length; i++) {
//     selectSingle_labels[i].addEventListener('click', (evt) => {
//       selectSingle_title.textContent = evt.target.textContent;
//       selectSingle.setAttribute('data-state', '');
//     });
//   }
//
// // Reset title
//   const reset = document.querySelector('.reset');
//   reset.addEventListener('click', () => {
//     selectSingle_title.textContent = selectSingle_title.getAttribute('data-default');
//   });
  const [state, setState] = React.useState( '' );
  const [currentValueText, setCurrentValueText] = React.useState( label );

  function handleSelectClick() {
    state === 'active' ? setState( '' ) : setState( 'active' );
  }

  function handleLabelClick(e) {
    setCurrentValueText( e.target.textContent );
    setState( '' );
  }


  return (
    <>
      <div className={`select ${name === 'month' ? 'select_name_month' : 'select_name_day-year'}`} data-state={state}>
        <div className={`select__title ${state === 'active' ? 'select__title_active' : ''}`} data-default="Option 0"
             onClick={handleSelectClick}>{currentValueText}</div>
        <div className="select__options">
          {options.map( (option, index) => (
            <div key={option}>
              <input id={`name-${index}`} className="select__option" type="radio" name={name}/>
              <label htmlFor={`name-${index}`} className="select__label" onClick={handleLabelClick}>{option}</label>
            </div>
          ) )}
        </div>
      </div>
    </>
  );
}