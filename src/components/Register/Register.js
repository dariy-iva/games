import React from "react";

import "./Register.css";
import HeaderSign from "../Headers/HeaderSign/HeaderSign";
import FormSign from "../FormSign/FormSign";
import useFormValidator from "../../hooks/useFormValidator";
import InputFormSign from "../FormSign/InputFormSign/InputFormSign";
import SelectFormSign from "../FormSign/SelectFormSign/SelectFormSign";
import {inputConfig} from "../../utils/constants/inputsSignFormConfig";

export default function Register({handleRegister}) {
  const {values, handleChange, errors, isValid} =
    useFormValidator( {} );
  const [activeSelect, setActiveSelect] = React.useState( null );

  React.useEffect( () => {
    window.addEventListener( 'click', handleWindowClick );
    return () => window.removeEventListener( 'click', handleWindowClick );
  }, );

  function handleWindowClick(e) {
    (e.target.id !== 'month' && e.target.id !== 'day' && e.target.id !== 'year') && setActiveSelect( null );
  }

  function selectOnClick(selectId) {
    setActiveSelect( selectId );
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(values);
  }

  return (
    <>
      <HeaderSign/>
      <main className="register">
        <FormSign
          name="register"
          buttonSubmitText="Sign up"
          onSubmit={handleSubmit}
          isValid={isValid}
        >
          <InputFormSign
            value={values.name || ""}
            onChange={handleChange}
            config={inputConfig.name}
            error={errors.name || ""}
            pattern="^[a-zA-Zа-яёА-ЯЁ\-\s]+$"
          />
          <InputFormSign
            value={values.email || ""}
            onChange={handleChange}
            config={inputConfig.email}
            error={errors.email || ""}
            pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$"
          />
          <InputFormSign
            value={values.password || ""}
            onChange={handleChange}
            config={inputConfig.password}
            error={errors.password || ""}
          />
          <p className="register__label">Date of Birth</p>
          <fieldset className="register__fieldset">
            <SelectFormSign
              onChange={handleChange}
              selectOnClick={selectOnClick}
              activeSelect={activeSelect}
              config={inputConfig.monthBirth}
              error={errors.month || ""}
            />
            <SelectFormSign
              onChange={handleChange}
              selectOnClick={selectOnClick}
              activeSelect={activeSelect}
              config={inputConfig.dayBirth}
              error={errors.day || ""}
            />
            <SelectFormSign
              onChange={handleChange}
              selectOnClick={selectOnClick}
              activeSelect={activeSelect}
              config={inputConfig.yearBirth}
              error={errors.year || ""}
            />
          </fieldset>
        </FormSign>
        <p className="register__text">By signing up, your agree to Partie’s&nbsp;
          <a href="/" target="_blank" className="register__link">Terms and
            Conditions</a>, End-User License Agreement and
          Privacy Policy.</p>
      </main>
    </>
  );
}