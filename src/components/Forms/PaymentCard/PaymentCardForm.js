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
      inputMode: 'latin-name'
    },
    date: {
      label: '',
      type: 'text',
      minLength: '5',
      maxLength: '5',
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

    handleChange(e);
  }

  function handleChangeCardNameInput(e) {
    e.target.value = e.target.value.replace(/[^a-zA-Z\s]/gi, '').toUpperCase();

    handleChange(e);
  }

  function handleChangeCardDateInput(e) {
    let value = e.target.value.replace(/[^\d]/g, '');

    if (value.length > 1) {
      value = value.slice(0, 2) + '/' + value.slice(2,);

      value = values.date.length > value.length && value[value.length - 1] === '/'
        ? value.slice(0, value.length - 1)
        : value;
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
        <InputFormSign
          value={values.number || ""}
          onChange={handleChangeCardNumberInput}
          config={inputConfig.number}
          error={errors.number || ""}
          pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
          autoComplete="off"
          notLable={true}
        />
        <InputFormSign
          value={values.name || ""}
          onChange={handleChangeCardNameInput}
          config={inputConfig.name}
          error={errors.name || ""}
          pattern="[A-Za-z]{2,} [A-Za-z]{2,}$"
          autoComplete="off"
          notLable={true}
        />
        <div className="payment-form__container">
          <InputFormSign
            value={values.date || ""}
            onChange={handleChangeCardDateInput}
            config={inputConfig.date}
            error={errors.date || ""}
            pattern="^[0-9]{2}\/[0-9]{2}$"
            autoComplete="off"
            notLable={true}
          />
          <InputFormSign
            value={values.code || ""}
            onChange={handleChangeCardCodInput}
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