import React from "react";
import "./FormSign.css";

export default function FormSign(props) {
  const { name, buttonSubmitText, children, onSubmit, isValid } =
    props;

  return (
    <>
      <form name={name} className="formSign" onSubmit={onSubmit}>
        <fieldset className="formSign__fieldset">{children}</fieldset>
        <button
          type="submit"
          className="formSign__submit-button"
          disabled={!isValid}
        >
          {buttonSubmitText}
        </button>
      </form>
    </>
  );
}