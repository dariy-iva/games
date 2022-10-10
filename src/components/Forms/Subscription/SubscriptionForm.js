import React from "react";
import "./SubscriptionForm.css";
import {subscriptionList} from "../../../utils/constants/subscriptionList";
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton";

export default function SubscriptionForm({onSubmit}) {
  const [checkedSubscription, setCheckedSubscription] = React.useState('');
  const [checkedPaymentMethod, setCheckedPaymentMethod] = React.useState('');
  const [paymentVariantIsOpen, setPaymentVariantIsOpen] = React.useState(false);

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

  React.useEffect(() => {
    subscriptionList.forEach(item => {
      item.checked && setCheckedSubscription(item.value);
    })
  }, []);

  React.useEffect(() => {
    document.forms['subscription'].requestSubmit()
  }, [checkedPaymentMethod]);

  return (
      <form name="subscription" className="subscription-form" onSubmit={handleSubscriptionSubmit}>
          <fieldset className="subscription-form__fieldset subscription-form__fieldset_content_variants">
            {subscriptionList.map(item => (
              <label className={`subscription-form__variant`} key={item.value}
                     status={checkInputStatus(item.value)}>
                {item.label}
                <input
                  type="radio"
                  className="subscription-form__input"
                  name='subscription'
                  value={item.value}
                  onChange={handleChangeSubscriptionInput}
                />
                <div className="subscription-form__price-container">
                  <p className="subscription-form__price">&#36;{item.price}</p>
                  <p className="subscription-form__period">{item.description}</p>
                </div>
              </label>
            ))}
          </fieldset>
          <ul className="subscription-form__descriptions">
            <li className="subscription-form__description">Ad free</li>
            <li className="subscription-form__description">Unlock the full games experience</li>
            <li className="subscription-form__description">Unlimited games</li>
            <li className="subscription-form__description">Personal customize your games</li>
          </ul>
          {!paymentVariantIsOpen && <SubmitButton type="button" className="subscription-form__button" text={'Start 30 day trial'} disabled={false}
                                                  onClick={handleFreePeriodButtonClick}/>}
          {paymentVariantIsOpen && (

            <fieldset className="subscription-form__fieldset subscription-form__fieldset_content_payment">
              <label className="subscription-form__payment-method subscription-form__payment-method_content_card">
                <input
                  type="radio"
                  className="subscription-form__input"
                  name="payment-method"
                  value="card"
                  onChange={handleChangePaymentMethodInput}
                />
                Credit card
              </label>
              <label className="subscription-form__payment-method subscription-form__payment-method_content_paypal">
                <input
                  type="radio"
                  className="subscription-form__input"
                  name="payment-method"
                  value="paypal"
                  onChange={handleChangePaymentMethodInput}
                />
                Paypal
              </label>
            </fieldset>
          )}
        </form>
  );
}