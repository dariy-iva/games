import React from "react";
import "./RegisterPage.css";
import HeaderSign from "../../Headers/HeaderSign/HeaderSign";
import SignForm from "../../Forms/Sign/SignForm";
import useFormValidator from "../../../hooks/useFormValidator";
import InputForm from "../../Forms/InputForm/InputForm";
import SelectFormSign from "../../Forms/Sign/SelectFormSign/SelectFormSign";
import {inputsSignFormConfig as inputConfig} from "../../../utils/constants/inputsConfigs";
import {nowDay, nowMonth, nowYear} from "../../../utils/constants/nowDate";

export default function RegisterPage({handleRegister}) {
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
    handleRegister( values );
  }

  return (
    <>
      <HeaderSign/>
      <main className="register">
        <SignForm
          name="register"
          buttonSubmitText="Sign up"
          onSubmit={handleSubmit}
          isValid={isValid}
        >
          <InputForm
            value={values.name || ""}
            onChange={handleChange}
            config={inputConfig.name}
            error={errors.name || ""}
            minLength="2"
            maxLength="30"
            pattern="^[\w\-\s]+$"
          />
          <InputForm
            value={values.email || ""}
            onChange={handleChange}
            config={inputConfig.email}
            error={errors.email || ""}
            pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$"
          />
          <InputForm
            value={values.password || ""}
            onChange={handleChange}
            config={inputConfig.password}
            error={errors.password || ""}
            minLength="6"
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
          <InputForm
            value={values.birthday || ""}
            onChange={handleChange}
            config={inputConfig.birthday}
            error={errors.birthday || ""}
            className="register__birthday"
            min={`${nowYear - 100}-${nowMonth < 10 ? '0' + nowMonth : nowMonth}-${nowDay < 10 ? '0' + nowDay : nowDay}`}
            max={`${nowYear - 16}-${nowMonth < 10 ? '0' + nowMonth : nowMonth}-${nowDay < 10 ? '0' + nowDay : nowDay}`}
          />
        </SignForm>
        <p className="register__text">By signing up, your agree to Partie’s &nbsp;
          <a href="/src/components/pages" target="_blank" className="register__link">Terms and
            Conditions</a>, End-User License Agreement and
          Privacy Policy.</p>
      </main>
    </>
  );
}