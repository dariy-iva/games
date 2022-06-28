import React from "react";
import "./FormSign.css";
import Button from "../Button/Button";

export default function FormSign(props) {
  const {name, buttonSubmitText, children, onSubmit, isValid} =
    props;

  return (
    <>
      <form name={name} className="formSign" onSubmit={onSubmit}>
        <fieldset className="formSign__fieldset">{children}</fieldset>
        <Button type="submit" className={''} text={buttonSubmitText} disabled={!isValid} />
      </form>
    </>
  );
}