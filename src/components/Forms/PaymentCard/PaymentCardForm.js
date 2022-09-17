import React from "react";
import "./PaymentCardForm.css";

import Button from "../../Button/Button";
import InputFormSign from "../../Forms/Sign/InputFormSign/InputFormSign";
import useFormValidator from "../../../hooks/useFormValidator";

export default function PaymentCardForm({onSubmit}) {
  const {values, handleChange, errors, isValid} =
    useFormValidator({});
  const inputConfig = {
    number: {
      label: '',
      type: 'text',
      minLength: '19',
      maxLength: '19',
      name: 'number',
      placeholder: 'Card number',
      inputMode: 'numeric',
    },
    name: {
      label: '',
      type: 'text',
      minLength: '5',
      maxLength: '30',
      name: 'name',
      placeholder: 'Name on the card',
    },
    date: {
      label: '',
      type: 'text',
      name: 'date',
      inputMode: 'numeric',
      placeholder: 'Date',
    },
    code: {
      label: '',
      type: 'password',
      minLength: '3',
      maxLength: '3',
      name: 'code',
      inputMode: 'numeric',
      placeholder: 'CVC',
    },
  };

  function handleFormSubmit(e) {
    e.preventDefault();

  }

  function handleChangeCardNumberInput(e) {
    const cardNumber = e.target.value.split(' ').join('');
    if (cardNumber.length % 4 === 0 && e.target.value.length < 19 && e.target.value[e.target.value.length - 1] !== ' ') {
      e.target.value = e.target.value + ' ';
    }
    handleChange(e);
  }

  return (
    <form name="payment" className="payment-form" onSubmit={handleFormSubmit}>
      <fieldset className="payment-form__fieldset">
        <InputFormSign
          value={values.number || ""}
          onChange={handleChangeCardNumberInput}
          config={inputConfig.number}
          error={errors.number || ""}
          pattern="\d{4}\s\d{4}\s\d{4}\s\d{4}"
          autoComplete="off"
          notLable={true}
        />
        <InputFormSign
          value={values.name || ""}
          onChange={handleChange}
          config={inputConfig.name}
          error={errors.name || ""}
          pattern="^[A-Za-z]{2,} [A-Za-z]{2,}$"
          autoComplete="off"
          notLable={true}
        />
        <div className="payment-form__container">
          <InputFormSign
            value={values.date || ""}
            onChange={handleChange}
            config={inputConfig.date}
            error={errors.date || ""}
            autoComplete="off"
            notLable={true}
          />
          <InputFormSign
            value={values.code || ""}
            onChange={handleChange}
            config={inputConfig.code}
            error={errors.code || ""}
            pattern="^[0-9]{3}$"
            autoComplete="off"
            notLable={true}
          />
        </div>
      </fieldset>

      <Button type="submit" className={''} text="Confirm" disabled={!isValid}/>
    </form>
  );
}