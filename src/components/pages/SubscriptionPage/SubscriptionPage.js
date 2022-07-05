import React from "react";
import "./SubscriptionPage.css";
import HeaderMain from "../../Headers/HeaderMain/HeaderMain";
import {subscriptionList} from "../../../utils/constants/subscriptionList";
import AnimationOverlay from "../../AnimationOverlay/AnimationOverlay";
import Button from "../../Button/Button";

export default function SubscriptionPage({onSubmit}) {
  const colorsForOverlay = ['#6E4AFF', '#D2C867'];
  const [checkedSubscription, setCheckedSubscription] = React.useState('');
  const [checkedPaymentMethod, setCheckedPaymentMethod] = React.useState('');
  const [paymentVariantIsOpen, setPaymentVariantIsOpen] = React.useState(false);
  const [isPayment, setIsPayment] = React.useState(false);

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

  return (
    <>
      <HeaderMain/>
      <section className="subscription">
        <h1 className="subscription__title">{isPayment ? 'Add a Credit card' : 'Games Subscriptions'}</h1>
        {isPayment && (<p className="subscription__text">Few words about privacy and something like that and Privacy Policy.</p>)}
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
            
          </form>
        )}

      </section>
      <AnimationOverlay colors={colorsForOverlay}/>
    </>
  );
}