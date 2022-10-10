import React from "react";
import "./SubscriptionPage.css";
import HeaderMain from "../../Headers/HeaderMain/HeaderMain";
import AnimationOverlay from "../../AnimationOverlay/AnimationOverlay";
import SubscriptionForm from "../../Forms/Subscription/SubscriptionForm";
import PaymentCardForm from "../../Forms/PaymentCard/PaymentCardForm";
import BackButton from "../../Buttons/BackButton/BackButton";
import InformationWithImage from "../../InformationWithImage/InformationWithImage";
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton";

export default function SubscriptionPage({onSubmit}) {
  const colorsForOverlay = ['#6E4AFF', '#D2C867'];
  const [isPayment, setIsPayment] = React.useState(false);
  const [isFinishPayment, setIsFinishPayment] = React.useState(false);

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

  function handleSubmitPaymentForm(data) {
    setIsPayment(false);
    setIsFinishPayment(true);
  }

  function handleBackButtonClick() {
    setIsPayment(false);
  }

  function handleStartServiceClick() {
    onSubmit();
  }

  return (
    <>
      <HeaderMain/>
      <main className="subscription">
        {isPayment &&
          <>
            <h1 className="subscription__title">Add a Credit card</h1>
            <p className="subscription__text">Few words about privacy and something like that and Privacy Policy.</p>
            <PaymentCardForm onSubmit={handleSubmitPaymentForm}/>
          </>}
        {!isPayment && !isFinishPayment && <>
          <h1 className="subscription__title subscription__title_not-description">Games Subscriptions</h1>
          <SubscriptionForm onSubmit={handleSubmitSubscriptionForm}/>
        </>}
        {isFinishPayment &&
          <>
            <InformationWithImage title="Welcome to the Games"
                                  text="Few words about privacy and something like that and Privacy Policy."/>
            <SubmitButton type="button" text="Start" onClick={handleStartServiceClick} className="subscription__button"
                          disabled={false}/>
          </>}
      </main>
      {isPayment && <BackButton className="subscription__back" onClick={handleBackButtonClick}/>}
      {!isPayment && !isFinishPayment && <AnimationOverlay colors={colorsForOverlay}/>}
    </>
  );
}