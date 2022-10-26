import React from "react";
import "./PaymentPage.css";
import HeaderMain from "../../Headers/HeaderMain/HeaderMain";
import PaymentCardForm from "../../Forms/PaymentCard/PaymentCardForm";
import BackButton from "../../Buttons/BackButton/BackButton";
import InformationWithImage from "../../InformationWithImage/InformationWithImage";
import StartButton from "../../Buttons/StartButton/StartButton";

export default function PaymentPage({onSubmit}) {
  const [paymentIsFinished, setPaymentIsFinished] = React.useState(false);


  function handleSubmitPaymentForm(data) {
    onSubmit(data);
    setPaymentIsFinished(true);
  }

  return (
    <>
      <HeaderMain/>
      <main className="payment">
        {!paymentIsFinished &&
          <>
            <h1 className="payment__title">Add a Credit card</h1>
            <p className="payment__text">Few words about privacy and something like that and Privacy Policy.</p>
            <PaymentCardForm onSubmit={handleSubmitPaymentForm}/>
          </>}
        {paymentIsFinished &&
          <>
            <InformationWithImage title="Welcome to the Games"
                                  text="Few words about privacy and something like that and Privacy Policy."/>
            <StartButton/>
          </>}
      </main>
      {!paymentIsFinished && <BackButton className="payment__back"/>}
    </>
  );
}