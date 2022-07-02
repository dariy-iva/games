import React from "react";
import "./SubscriptionPage.css";
import HeaderMain from "../../Headers/HeaderMain/HeaderMain";
import {subscriptionList} from "../../../utils/constants/subscriptionList";
import AnimationOverlay from "../../AnimationOverlay/AnimationOverlay";
import Button from "../../Button/Button";

export default function SubscriptionPage({onSubmit}) {
  const colorsForOverlay = ['#6E4AFF', '#D2C867'];
  const [checkedItem, setCheckedItem] = React.useState('');
  const [isPayment, setIsPayment] = React.useState(false);

  function handleChangeInput(e) {
    e.target.checked && setCheckedItem(e.target.value);
  }

  function checkInputStatus(inputValue) {
    return checkedItem === inputValue ? 'checked' : 'not-checked';
  }

  function handleFreePeriodButtonClick() {
    setIsPayment(true);
  }

  function handleSubmit(e) {
    onSubmit();
  }

  React.useEffect(() => {
    subscriptionList.forEach(item => {
      item.checked && setCheckedItem(item.value);
    })
  }, []);

  return (
    <>
      <HeaderMain/>
      <section className="subscription">
        <h1 className="subscription__title">games subscriptions</h1>
        <form name="subscription" className="subscription__form" onSubmit={handleSubmit}>
          <fieldset className="subscription__fieldset">
            {subscriptionList.map(item => (
              <label className={`subscription__label`} key={item.value}
                     status={checkInputStatus(item.value)}>
                {item.label}
                <input
                  type="radio"
                  className="subscription__input"
                  name='subscription'
                  value={item.value}
                  onChange={handleChangeInput}
                />
                <div className="subscription__price-container">
                  <p className="subscription__price">&#36;{item.price}</p>
                  <p className="subscription__period">{item.description}</p>
                </div>
              </label>
            ))}
          </fieldset>
          <ul className="subscription__descriptions">
            <li className="subscriptions_description">Ad free</li>
            <li className="subscription__description">Unlock the full games experience</li>
            <li className="subscription__description">Unlimited games</li>
            <li className="subscription__description">Personal customize your games</li>
          </ul>
          {!isPayment && <Button type="button" className={''} text={'Start 30 day trial'} disabled={false}
                                 onClick={handleFreePeriodButtonClick}/>}
          {isPayment && (
            <div className="subscription__buttons">
              <button type="submit" className="subscription__button">Credit card</button>
              <a href="https://www.paypal.com" target="_blank" className="subscription__button">Paypal</a>
            </div>
          )}
        </form>

      </section>
      <AnimationOverlay colors={colorsForOverlay}/>
    </>
  );
}