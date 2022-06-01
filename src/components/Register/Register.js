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

  function handleSubmit(e) {
    e.preventDefault();
    // handleRegister(values);
  }
  console.log(values)

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
          <fieldset className="register__fieldset">
            <SelectFormSign
              value={values.month || ""}
              onChange={handleChange}
              config={inputConfig.monthBirth}
              error={errors.month || ""}
            />
            <SelectFormSign
              value={values.day || ""}
              onChange={handleChange}
              config={inputConfig.dayBirth}
              error={errors.day || ""}
            />
            <SelectFormSign
              value={values.year || ""}
              onChange={handleChange}
              config={inputConfig.yearBirth}
              error={errors.year || ""}
            />
          </fieldset>
        </FormSign>
      </main>
    </>
  );
}