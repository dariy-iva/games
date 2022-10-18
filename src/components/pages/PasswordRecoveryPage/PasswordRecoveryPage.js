import React from "react";
import {Link, useNavigate} from "react-router-dom";
import "./PasswordRecoveryPage.css";
import HeaderSign from "../../Headers/HeaderSign/HeaderSign";
import InformationWithImage from "../../InformationWithImage/InformationWithImage";
import SignForm from "../../Forms/Sign/SignForm";
import InputForm from "../../Forms/InputForm/InputForm";
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton";
import useFormValidator from "../../../hooks/useFormValidator";
import {inputsSignFormConfig as inputConfig} from "../../../utils/constants/inputsConfigs";
import {pathsConfig} from "../../../utils/constants/pathList";

export default function PasswordRecoveryPage({handleResetPassword}) {
  const {values, handleChange, errors, isValid} = useFormValidator({});
  const [isSubmitPassword, setIsSubmitPassword] = React.useState(false);
  const history = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // handleResetPassword( values );
    setIsSubmitPassword(true);
  }

  function handleOpenMailApp() {
    const mailDomain = values.email.split('@')[1];
    const link = `https://${mailDomain}`;
    window.open(link);
    history(pathsConfig.login);
  }

  return (
    <>
      <HeaderSign/>
      <main className="recovery">
        {isSubmitPassword && (
          <>
            <InformationWithImage title="Check your email"
                                  text={`An email was sent to ${values.email || ''}, tap to link to create new Games password`}/>
            <SubmitButton type="button" text="Open email app" onClick={handleOpenMailApp} className="recovery__button"
                          name="Open app button"/>
          </>
        )}
        {!isSubmitPassword && (<SignForm
          name="recovery"
          buttonSubmitText="Reset Password"
          onSubmit={handleSubmit}
          isValid={isValid}
        >
          <InputForm
            value={values.email || ""}
            onChange={handleChange}
            config={inputConfig.email}
            error={errors.email || ""}
            pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$"
          />
        </SignForm>)}
        <Link to={pathsConfig.contacts} className="login__text login__link link-hover login__link_path_contact">Need
          help? Contact
          Us</Link>
      </main>
    </>
  );
}