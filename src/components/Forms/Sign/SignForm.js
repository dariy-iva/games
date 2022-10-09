import React from "react";
import "./SignForm.css";
import Button from "../../Button/Button";

export default function SignForm(props) {
  const {name, buttonSubmitText, children, onSubmit, isValid} =
    props;

  return (
    <>
      <form name={name} className="formSign" onSubmit={onSubmit}>
        <fieldset className="formSign__fieldset">{children}</fieldset>
        <Button type="submit" text={buttonSubmitText} disabled={!isValid} />
      </form>
    </>
  );
}