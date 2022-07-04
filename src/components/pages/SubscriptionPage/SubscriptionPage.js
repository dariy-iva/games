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
  const [isPayment, setIsPayment] = React.useState(false);

  const eventSubmit = new Event("submit", {
    cancelable: true
  });
  let eventClick = new Event("click");

  function handleChangeSubscriptionInput(e) {
    e.target.checked && setCheckedSubscription(e.target.value);
  }

  function handleChangePaymentMethodInput(e) {
    e.target.checked && setCheckedPaymentMethod(e.target.value);

    document.querySelector("#test").dispatchEvent(eventClick)
    let input = document.forms['subscription'].elements['subscription'][1]
    console.log(document.forms['subscription'].dispatchEvent(eventSubmit), eventSubmit)
    input.dispatchEvent(eventClick);
  }

  function checkInputStatus(inputValue) {
    return checkedSubscription === inputValue ? 'checked' : 'not-checked';
  }

  function handleFreePeriodButtonClick() {
    setIsPayment(true);
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(1)
    onSubmit();
  }

  React.useEffect(() => {
    subscriptionList.forEach(item => {
      item.checked && setCheckedSubscription(item.value);
    })
  }, []);

  return (
    <>
      <HeaderMain/>
      <section className="subscription">
        <h1 className="subscription__title">games subscriptions</h1>
        <form name="subscription" className="subscription__form" onSubmit={handleSubmit}>
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
            <li className="subscription__description" id='test' onClick={() => console.log('test1')}>Ad free</li>
            <li className="subscription__description">Unlock the full games experience</li>
            <li className="subscription__description">Unlimited games</li>
            <li className="subscription__description">Personal customize your games</li>
          </ul>
          {!isPayment && <Button type="button" className={''} text={'Start 30 day trial'} disabled={false}
                                 onClick={handleFreePeriodButtonClick}/>}
          {isPayment && (

            <fieldset className="subscription__fieldset">
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
              {/*<button type="submit" className="subscription__button">Credit card</button>*/}
              {/*<a href="https://www.paypal.com" target="_blank" className="subscription__button">Paypal</a>*/}
            </fieldset>
          )}
        </form>

      </section>
      <AnimationOverlay colors={colorsForOverlay}/>
    </>
  );
}