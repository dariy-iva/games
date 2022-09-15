import React from "react";
import "./SubscriptionPage.css";
import HeaderMain from "../../Headers/HeaderMain/HeaderMain";
import AnimationOverlay from "../../AnimationOverlay/AnimationOverlay";
import Button from "../../Button/Button";
import InputFormSign from "../../FormSign/InputFormSign/InputFormSign";
import useFormValidator from "../../../hooks/useFormValidator";
import SubscriptionForm from "../../Forms/Subscription/SubscriptionForm";

export default function SubscriptionPage({onSubmit}) {
  const colorsForOverlay = ['#6E4AFF', '#D2C867'];
  const [isPayment, setIsPayment] = React.useState(false);
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

  function handleSubmitSubscriptionForm(data) {
    switch (data.payment) {
      case 'card':
        setIsPayment(true);
        break;
      case 'paypal':
        window.open('https://www.paypal.com');
        onSubmit();
        break;
    }
  }

  function handlePaymentSubmit(e) {
    e.preventDefault();
  }

  function handleChangeCardNumberInput(e) {
    const cardNumber = e.target.value.split(' ').join('');
    if (cardNumber.length % 4 === 0 && e.target.value.length < 19 && e.target.value[e.target.value.length - 1] !== ' ') {
      e.target.value = e.target.value + ' ';
    }
    handleChange(e);
  }

  function handleBackButtonClick() {
    setIsPayment(false);
  }

  return (
    <>
      <HeaderMain/>
      <section className="subscription">
        <h1 className="subscription__title">{isPayment ? 'Add a Credit card' : 'Games Subscriptions'}</h1>
        {isPayment && (
          <p className="subscription__text">Few words about privacy and something like that and Privacy Policy.</p>)}
        {!isPayment && <SubscriptionForm onSubmit={handleSubmitSubscriptionForm}/>}
        {isPayment && (
          <form name="payment" className="payment-form" onSubmit={handlePaymentSubmit}>
            <InputFormSign
              value={values.number || ""}
              onChange={handleChangeCardNumberInput}
              config={inputConfig.number}
              error={errors.number || ""}
              pattern="\d{4}\s\d{4}\s\d{4}\s\d{4}"
            />
            <InputFormSign
              value={values.name || ""}
              onChange={handleChange}
              config={inputConfig.name}
              error={errors.name || ""}
              pattern="^[A-Za-z]{2,} [A-Za-z]{2,}$"
            />
            <InputFormSign
              value={values.date || ""}
              onChange={handleChange}
              config={inputConfig.date}
              error={errors.date || ""}
            />
            <InputFormSign
              value={values.code || ""}
              onChange={handleChange}
              config={inputConfig.code}
              error={errors.code || ""}
              pattern="^[0-9]{3}$"
            />
            <Button type="submit" className={''} text="Confirm" disabled={!isValid}/>
          </form>
        )}
      </section>
      {isPayment && <button type="button" className="button-back" onClick={handleBackButtonClick}/>}
      <AnimationOverlay colors={colorsForOverlay}/>
    </>
  );
}