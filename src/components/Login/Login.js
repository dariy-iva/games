import React from "react";
import "./Login.css";
import HeaderSign from "../Headers/HeaderSign/HeaderSign";
import SignForm from "../Forms/Sign/SignForm";
import InputFormSign from "../Forms/Sign/InputFormSign/InputFormSign";
import Button from "../Button/Button";
import {inputConfig} from "../../utils/constants/inputsSignFormConfig";
import {pathsConfig} from "../../utils/constants/pathList";
import useFormValidator from "../../hooks/useFormValidator";

export default function Login({handleLogin}) {
  const {values, handleChange, errors, isValid} =
    useFormValidator( {} );

  const socialLinkConfig = [{text: 'Log in with Apple', label: 'apple'}, {
    text: 'Log in with Google',
    label: 'google'
  }, {text: 'Connect with Facebook', label: 'fb'}];

  const [allButtonIsShow, setAllButtonIsShow] = React.useState( false );

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin( values );
  }

  function handleOpenAllButtonClick() {
    setAllButtonIsShow( true );
  }

  return (
    <>
      <HeaderSign/>
      <main className="login">
        <SignForm
          name="login"
          buttonSubmitText="Log in"
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
            value={values.password || ""}
            onChange={handleChange}
            config={inputConfig.password}
            error={errors.password || ""}
          />
          <a href={pathsConfig.resetPassword} className="login__text login__link login__link_path_reset link-hover">Forgot
            password?</a>
        </SignForm>

        <a href={pathsConfig.contacts} className="login__text login__link link-hover login__link_path_contact"
           target="_blank">Need help? Contact
          Us</a>
        <span className="login__line">or</span>
        <div className="login__buttons-container">
          {socialLinkConfig.map( (item, index) => (
            <button
              className={`login__button login__button_content_${item.label} login__text ${!allButtonIsShow && index > 0 ? 'login__button_hidden' : ''}`}
              type="button" key={item.label}>{item.text}
            </button>
          ) )}
          {!allButtonIsShow && (
            <span className="login__text login__link login__link_path_show-icon link-hover"
                  onClick={handleOpenAllButtonClick}>Show all</span>)}
        </div>
      </main>
    </>
  );
}