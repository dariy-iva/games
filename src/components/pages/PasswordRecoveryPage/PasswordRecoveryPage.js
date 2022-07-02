import React from "react";
import {useNavigate } from "react-router-dom";
import "./PasswordRecoveryPage.css";
import HeaderSign from "../../Headers/HeaderSign/HeaderSign";
import FormSign from "../../FormSign/FormSign";
import InputFormSign from "../../FormSign/InputFormSign/InputFormSign";
import useFormValidator from "../../../hooks/useFormValidator";
import {inputConfig} from "../../../utils/constants/inputsSignFormConfig";
import {pathsConfig} from "../../../utils/constants/pathList";

export default function PasswordRecoveryPage({handleResetPassword}) {
  const {values, handleChange, errors, isValid} =
    useFormValidator( {} );
  const history = useNavigate();
  const [isSubmitPassword, setIsSubmitPassword] = React.useState( false );

  function handleSubmit(e) {
    e.preventDefault();
    // handleResetPassword( values );
    setIsSubmitPassword( true );
  }

  function handleBackButtonClick() {
    history(-1);
  }

  return (
    <>
      <HeaderSign onBackButtonClick={handleBackButtonClick}/>
      <main className="recovery">
        {isSubmitPassword && (
          <section className="recovery__info">
            <h1 className="recovery__title">Check your email</h1>
            <p className="recovery__description">{`An email was sent to ${values.email || ''}, tap to link to create new Partie password`}</p>
          </section>
        )}
        <FormSign
          name="recovery"
          buttonSubmitText={isSubmitPassword ? 'Dismiss' : 'Reset Password'}
          onSubmit={handleSubmit}
          isValid={isValid}
        >
          {!isSubmitPassword && (<InputFormSign
            value={values.email || ""}
            onChange={handleChange}
            config={inputConfig.email}
            error={errors.email || ""}
            pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$"
          />)}

        </FormSign>
        <a href={pathsConfig.contacts} className="login__text login__link link-hover login__link_path_contact"
           target="_blank">Need help? Contact
          Us</a>
      </main>
    </>
  );
}