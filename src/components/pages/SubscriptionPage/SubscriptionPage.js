import React from "react";
import "./SubscriptionPage.css";
import HeaderMain from "../../Headers/HeaderMain/HeaderMain";
import {subscriptionList} from "../../../utils/constants/subscriptionList";
import AnimationOverlay from "../../AnimationOverlay/AnimationOverlay";
import Button from "../../Button/Button";
import InputFormSign from "../../FormSign/InputFormSign/InputFormSign";
import useFormValidator from "../../../hooks/useFormValidator";

export default function SubscriptionPage({onSubmit}) {
  const colorsForOverlay = ['#6E4AFF', '#D2C867'];
  const [checkedSubscription, setCheckedSubscription] = React.useState('');
  const [checkedPaymentMethod, setCheckedPaymentMethod] = React.useState('');
  const [paymentVariantIsOpen, setPaymentVariantIsOpen] = React.useState(false);
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

  function handleChangeSubscriptionInput(e) {
    e.target.checked && setCheckedSubscription(e.target.value);
  }

  function handleChangePaymentMethodInput(e) {
    e.target.checked && setCheckedPaymentMethod(e.target.value);
  }

  function checkInputStatus(inputValue) {
    return checkedSubscription === inputValue ? 'checked' : 'not-checked';
  }

  function handleFreePeriodButtonClick() {
    setPaymentVariantIsOpen(true);
  }

  function handleSubscriptionSubmit(e) {
    e.preventDefault();
    const formData = {
      payment: checkedPaymentMethod,
      subscription: checkedSubscription,
    };
    onSubmit(formData);
  }

  function handlePaymentSubmit(e) {
    e.preventDefault();
  }

  React.useEffect(() => {
    subscriptionList.forEach(item => {
      item.checked && setCheckedSubscription(item.value);
    })
  }, []);

  React.useEffect(() => {
    checkedPaymentMethod && setIsPayment(true);
    // document.forms['subscription'].requestSubmit()
  }, [checkedPaymentMethod]);


  function handleChangeCardNumberInput(e) {
    const cardNumber = e.target.value.split(' ').join('');
    if (cardNumber.length % 4 === 0 && e.target.value.length < 19 && e.target.value[e.target.value.length - 1] !== ' ') {
      e.target.value = e.target.value + ' ';
    }
    handleChange(e);
  }

  return (
    <>
      <HeaderMain/>
      <section className="subscription">
        <h1 className="subscription__title">{isPayment ? 'Add a Credit card' : 'Games Subscriptions'}</h1>
        {isPayment && (
          <p className="subscription__text">Few words about privacy and something like that and Privacy Policy.</p>)}
        {!isPayment && (<form name="subscription" className="subscription__form" onSubmit={handleSubscriptionSubmit}>
          <fieldset className="subscription__fieldset subscription__fieldset_content_variants">
            {subscriptionList.map(item => (
              <label className={`subscription__variant`} key={item.value}
                     status={checkInputStatus(item.value)}>
                {item.label}
                <input
                  type="radio"
                  className="subscription__input"
                  name='subscription'
                  value={item.value}
                  onChange={handleChangeSubscriptionInput}
                />
                <div className="subscription__price-container">
                  <p className="subscription__price">&#36;{item.price}</p>
                  <p className="subscription__period">{item.description}</p>
                </div>
              </label>
            ))}
          </fieldset>
          <ul className="subscription__descriptions">
            <li className="subscription__description">Ad free</li>
            <li className="subscription__description">Unlock the full games experience</li>
            <li className="subscription__description">Unlimited games</li>
            <li className="subscription__description">Personal customize your games</li>
          </ul>
          {!paymentVariantIsOpen && <Button type="button" className={''} text={'Start 30 day trial'} disabled={false}
                                            onClick={handleFreePeriodButtonClick}/>}
          {paymentVariantIsOpen && (

            <fieldset className="subscription__fieldset subscription__fieldset_content_payment">
              <label className="subscription__payment-method subscription__payment-method_content_card">
                <input
                  type="radio"
                  className="subscription__input"
                  name="payment-method"
                  value="card"
                  onChange={handleChangePaymentMethodInput}
                />
                Credit card
              </label>
              <label className="subscription__payment-method subscription__payment-method_content_paypal">
                <input
                  type="radio"
                  className="subscription__input"
                  name="payment-method"
                  value="paypal"
                  onChange={handleChangePaymentMethodInput}
                />
                Paypal
              </label>
            </fieldset>
          )}
        </form>)}
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
            <Button type="submit" className={''} text="Confirm" disabled={!isValid} />
          </form>
        )}

      </section>
      <AnimationOverlay colors={colorsForOverlay}/>
    </>
  );
}