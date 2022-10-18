import React from "react";
import {Link} from "react-router-dom";
import "./LoginPage.css";
import HeaderSign from "../../Headers/HeaderSign/HeaderSign";
import SignForm from "../../Forms/Sign/SignForm";
import InputForm from "../../Forms/InputForm/InputForm";
import TokenAuthButtons from "../../TokenAuthButtons/TokenAuthButtons";
import {inputsSignFormConfig as inputConfig} from "../../../utils/constants/inputsConfigs";
import {pathsConfig} from "../../../utils/constants/pathList";
import useFormValidator from "../../../hooks/useFormValidator";

export default function LoginPage({handleLogin}) {
  const {values, handleChange, errors, isValid} =
    useFormValidator({});

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(values);
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
          <Link to={pathsConfig.resetPassword} className="login__text login__link login__link_path_reset link-hover">Forgot
            password?</Link>
        </SignForm>

        <Link to={pathsConfig.contacts} className="login__text login__link link-hover login__link_path_contact">Need help? Contact
          Us</Link>
        <TokenAuthButtons onLogin={handleLogin}/>
      </main>
    </>
  );
}