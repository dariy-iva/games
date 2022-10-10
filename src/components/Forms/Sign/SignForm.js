import React from "react";
import "./SignForm.css";
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton";

export default function SignForm(props) {
  const {name, buttonSubmitText, children, onSubmit, isValid} =
    props;

  return (
    <>
      <form name={name} className="formSign" onSubmit={onSubmit}>
        <fieldset className="formSign__fieldset">{children}</fieldset>
        <SubmitButton type="submit" text={buttonSubmitText} disabled={!isValid} />
      </form>
    </>
  );
}