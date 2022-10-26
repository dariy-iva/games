import React from "react";
import "./SubscriptionPage.css";
import HeaderMain from "../../Headers/HeaderMain/HeaderMain";
import AnimationOverlay from "../../AnimationOverlay/AnimationOverlay";
import SubscriptionForm from "../../Forms/Subscription/SubscriptionForm";
import InformationWithImage from "../../InformationWithImage/InformationWithImage";
import StartButton from "../../Buttons/StartButton/StartButton";

export default function SubscriptionPage({onSubmit}) {
  const colorsForOverlay = ['#6E4AFF', '#D2C867'];
  const [paymentIsFinished, setPaymentIsFinished] = React.useState(false);

  function handleSubmitSubscriptionForm(data) {
    onSubmit({paymentMethod: data.payment, subscription: data.subscription});

    if (data.payment === 'paypal') {
      setPaymentIsFinished(true);
    }
  }

  return (
    <>
      <HeaderMain/>
      <main className="subscription">

        {!paymentIsFinished && <>
          <h1 className="subscription__title">Games Subscriptions</h1>
          <SubscriptionForm onSubmit={handleSubmitSubscriptionForm}/>
        </>}
        {paymentIsFinished &&
          <>
            <InformationWithImage title="Welcome to the Games"
                                  text="Few words about privacy and something like that and Privacy Policy."/>
            <StartButton/>
          </>}
      </main>

      {!paymentIsFinished && <AnimationOverlay colors={colorsForOverlay}/>}
    </>
  );
}