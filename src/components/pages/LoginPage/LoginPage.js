import React from "react";
import "./LoginPage.css";
import HeaderSign from "../../Headers/HeaderSign/HeaderSign";
import SignForm from "../../Forms/Sign/SignForm";
import InputForm from "../../Forms/InputForm/InputForm";
import {inputsSignFormConfig as inputConfig} from "../../../utils/constants/inputsConfigs";
import {pathsConfig} from "../../../utils/constants/pathList";
import useFormValidator from "../../../hooks/useFormValidator";

export default function LoginPage({handleLogin}) {
  const {values, handleChange, errors, isValid} =
    useFormValidator({});

  const socialLinkConfig = [
    {text: 'Log in with Apple', label: 'apple', link: 'https://appleid.apple.com/',},
    {text: 'Log in with Google', label: 'google', link: 'https://myaccount.google.com',},
    {text: 'Connect with Facebook', label: 'fb', link: 'https://www.facebook.com/',}];

  const [allButtonIsShow, setAllButtonIsShow] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(values);
  }

  function handleOpenAllButtonClick() {
    setAllButtonIsShow(true);
  }

  function handleLoginWithTokenAuthentication(e) {
    const link = socialLinkConfig.find(item => item.label === e.target.id).link;
    window.open(link);
    handleLogin();
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
            value={values.password || ""}
            onChange={handleChange}
            config={inputConfig.password}
            error={errors.password || ""}
            minLength="6"
          />
          <a href={pathsConfig.resetPassword} className="login__text login__link login__link_path_reset link-hover">Forgot
            password?</a>
        </SignForm>

        <a href={pathsConfig.contacts} className="login__text login__link link-hover login__link_path_contact"
           target="_blank">Need help? Contact
          Us</a>
        <span className="login__line">or</span>
        <div className="login__buttons-container">
          {socialLinkConfig.map((item, index) => (
            <button
              className={`login__button login__button_content_${item.label} login__text ${!allButtonIsShow && index > 0 ? 'login__button_hidden' : ''}`}
              type="button" key={item.label} id={item.label} onClick={handleLoginWithTokenAuthentication}>{item.text}
            </button>
          ))}
          {!allButtonIsShow && (
            <span className="login__text login__link login__link_path_show-icon link-hover"
                  onClick={handleOpenAllButtonClick}>Show all</span>)}
        </div>
      </main>
    </>
  );
}