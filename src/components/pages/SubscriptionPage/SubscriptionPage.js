import React from "react";
import "./SubscriptionPage.css";
import HeaderMain from "../../Headers/HeaderMain/HeaderMain";
import AnimationOverlay from "../../AnimationOverlay/AnimationOverlay";
import SubscriptionForm from "../../Forms/Subscription/SubscriptionForm";
import PaymentCardForm from "../../Forms/PaymentCard/PaymentCardForm";
import BackButton from "../../BackButton/BackButton";

export default function SubscriptionPage({onSubmit}) {
  const colorsForOverlay = ['#6E4AFF', '#D2C867'];
  const [isPayment, setIsPayment] = React.useState(false);

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

  function handleSubmitPaymentForm(e) {

  }

  function handleBackButtonClick() {
    setIsPayment(false);
  }

  return (
    <>
      <HeaderMain/>
      <section className="subscription">
        <h1
          className={`subscription__title ${!isPayment ? 'subscription__title_not-description' : ''}`}>{isPayment ? 'Add a Credit card' : 'Games Subscriptions'}</h1>
        {isPayment &&
          <p className="subscription__text">Few words about privacy and something like that and Privacy Policy.</p>}
        {!isPayment && <SubscriptionForm onSubmit={handleSubmitSubscriptionForm}/>}
        {isPayment && <PaymentCardForm/>}
      </section>
      {isPayment && <BackButton className="subscription__back" onClick={handleBackButtonClick}/>}
      {!isPayment && <AnimationOverlay colors={colorsForOverlay}/>}
    </>
  );
}