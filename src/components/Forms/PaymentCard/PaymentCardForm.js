import React from "react";
import "./PaymentCardForm.css";
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton";
import InputForm from "../InputForm/InputForm";
import useFormValidator from "../../../hooks/useFormValidator";
import {inputsPaymentFormConfig as inputConfig} from "../../../utils/constants/inputsConfigs";

export default function PaymentCardForm({onSubmit}) {
  const {values, handleChange, errors, isValid} =
    useFormValidator({});

  function handleFormSubmit(e) {
    e.preventDefault();
    const splitDate = values.date.split('/');

    const formData = {
      number: values.number.replace(/[^\d]/g, ''),
      name: values.name,
      date: `${'20' + splitDate[1]}-${splitDate[0]}`,
      code: values.code
    }

    onSubmit(formData);
  }

  function handleChangeCardNumberInput(e) {
    e.target.setCustomValidity("");
    e.target.value = e.target.value.replace(/[^\d]/g, '');
    const value = e.target.value;
    const blocks = Math.floor(value.length / 4);

    if (value && blocks) {
      const count = blocks > 3 ? 3 : blocks;
      let items = e.target.value.split('');

      for (let i = 0; i < count; i++) {
        let index = 4 * (1 + i) + i;
        items.splice(index, 0, ' ');
      }
      items = items.join('');

      e.target.value = values.number.length > items.length && items[items.length - 1] === ' '
        ? items.slice(0, items.length - 1)
        : items;
    }

    e.target.validity.patternMismatch && e.target.setCustomValidity('The card number must contain 12 digits');

    handleChange(e);
  }

  function handleChangeCardNameInput(e) {
    e.target.setCustomValidity("");
    e.target.value > e.target.value.replace(/[^a-zA-Z\s]/gi, '') && e.target.setCustomValidity('The name on the card must contain only latin letters');
    e.target.value = e.target.value.replace(/[^a-zA-Z\s]/gi, '').toUpperCase();
    handleChange(e);
  }

  function handleChangeCardDateInput(e) {
    e.target.setCustomValidity("");
    let value = e.target.value.replace(/[^\d]/g, '');

    if (value.length > 1) {
      value = value.slice(0, 2) + '/' + value.slice(2,);

      value = values.date.length > value.length && value[value.length - 1] === '/'
        ? value.slice(0, value.length - 1)
        : value;
    }

    if (value.length === 5) {
      const month = value.slice(0, 2) - 1;
      const year = +('20' + value.slice(3,));
      const date = new Date(year, month);
      const nowDate = new Date(new Date().getFullYear(), new Date().getMonth());

      nowDate > date && e.target.setCustomValidity('The card has expired');
      (month > 11 || year > new Date().getFullYear() + 10) && e.target.setCustomValidity('Incorrect card expiration date');
    }
    e.target.value = value;

    handleChange(e);
  }

  function handleChangeCardCodInput(e) {
    e.target.value = e.target.value.replace(/[^\d]/g, '').toUpperCase();
    handleChange(e);
  }

  return (
    <form name="payment" className="payment-form" onSubmit={handleFormSubmit}>
      <fieldset className="payment-form__fieldset">
        <InputForm
          value={values.number || ""}
          onChange={handleChangeCardNumberInput}
          config={inputConfig.number}
          error={errors.number || ""}
          minLength='19'
          maxLength='19'
          pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
          inputMode='numeric'
          autoComplete="off"
          notLabel={true}
        />
        <InputForm
          value={values.name || ""}
          onChange={handleChangeCardNameInput}
          config={inputConfig.name}
          error={errors.name || ""}
          minLength='5'
          maxLength='30'
          pattern="[A-Za-z]{2,} [A-Za-z]{2,}$"
          inputMode='latin-name'
          autoComplete="off"
          notLabel={true}
        />
        <div className="payment-form__container">
          <InputForm
            value={values.date || ""}
            onChange={handleChangeCardDateInput}
            config={inputConfig.date}
            error={errors.date || ""}
            minLength='5'
            maxLength='5'
            pattern="^[0-1][0-9]\/[0-9]{2}$"
            inputMode='numeric'
            autoComplete="off"
            notLabel={true}
          />
          <InputForm
            value={values.code || ""}
            onChange={handleChangeCardCodInput}
            config={inputConfig.code}
            error={errors.code || ""}
            minLength='3'
            maxLength='3'
            pattern="^[0-9]{3}$"
            inputMode='numeric'
            autoComplete="off"
            notLabel={true}
          />
        </div>
      </fieldset>

      <SubmitButton type="submit" className="" text="Confirm" disabled={!isValid}/>
    </form>
  );
}