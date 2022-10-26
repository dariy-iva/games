import React from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {
  registerUser,
  setUserSubscription,
  setUserPaymentMethod,
  setUserCardData,
  setUserPlatforms,
  setUserGames,
  clearUserData
} from "../../redux/slices/userSlice";
import './App.css';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import StartPage from "../pages/StartPage/StartPage.js";
import RegisterPage from "../pages/RegisterPage/RegisterPage.js";
import LoginPage from "../pages/LoginPage/LoginPage.js";
import PasswordRecoveryPage from '../pages/PasswordRecoveryPage/PasswordRecoveryPage.js';
import PlatformChoicePage from "../pages/PlatformChoicePage/PlatformChoicePage";
import GamesChoicePage from "../pages/GamesChoicePage/GamesChoicePage";
import SubscriptionPage from "../pages/SubscriptionPage/SubscriptionPage";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import {pathsConfig} from "../../utils/constants/pathList.js";
import InfoPopup from "../InfoPopup/InfoPopup";
import {openInfoPopup, closeInfoPopup} from "../../redux/slices/supportSlice";

function App(props) {
  const {
    user,
    registerUser,
    setUserSubscription,
    setUserPaymentMethod,
    setUserCardData,
    setUserPlatforms,
    setUserGames,
    clearUserData,
    support,
    openInfoPopup,
    closeInfoPopup
  } = props;

  const history = useNavigate();

  function checkUserData(data) {
    return user.name === data.name && user.password === data.password;
  }

  function handleRegister(dataUser) {
    registerUser({
      name: dataUser.name,
      email: dataUser.email,
      password: dataUser.password,
      birthday: dataUser.birthday || '',
    });

    openInfoPopup({status: 'success', text: 'Registration was successful'});
    history(pathsConfig.login);
  }

  function handleLogin(dataUser) {
    const isSuccessCheckUser = checkUserData(dataUser);

    if (isSuccessCheckUser) {
      history(pathsConfig.platformsChoice)
    } else {
      openInfoPopup({
        status: 'error',
        text: 'User name or password entered incorrectly. Please, try again or let us know about the problem.'
      });
    }
  }

  function handleChoicePlatforms(data) {
    setUserPlatforms(data);
    history(pathsConfig.gamesChoice);
  }

  function handleChoiceGames(data) {
    setUserGames(data);
    history(pathsConfig.subscription);
  }

  function handleChoiceSubscriptionAndPaymentMethod(data) {
    const {paymentMethod, subscription} = data;

    setUserPaymentMethod(paymentMethod);
    setUserSubscription(subscription);

    switch (paymentMethod) {
      case 'card':
        history(pathsConfig.payment);
        break;
      case 'paypal':
        window.open('https://www.paypal.com');
        break;
      default:
        return;
    }
  }

  function handlePaymentCardSubmit(data) {
    const {number, name, date, code} = data;

    setUserCardData({
      cardNumber: number,
      cardName: name,
      cardDate: date,
      cardCode: code,
    });

    openInfoPopup({status: 'success', text: 'The payment was successful. Thank you for your trust'});
  }

  return (
    <div className="page">
      <InfoPopup/>
      <Routes>
        <Route exact path={pathsConfig.start} element={<StartPage onLogin={handleLogin}/>}/>
        <Route
          path={pathsConfig.register}
          element={<RegisterPage handleRegister={handleRegister}/>}
        />
        <Route path={pathsConfig.login} element={<LoginPage handleLogin={handleLogin}/>}/>
        <Route path={pathsConfig.resetPassword} element={<PasswordRecoveryPage/>}/>

        <Route
          path={pathsConfig.platformsChoice}
          element={
            <ProtectedRoute>
              <PlatformChoicePage onSubmit={handleChoicePlatforms}/>
            </ProtectedRoute>
          }
        />
        <Route
          path={pathsConfig.gamesChoice}
          element={
            <ProtectedRoute>
              <GamesChoicePage onSubmit={handleChoiceGames}/>
            </ProtectedRoute>
          }
        />
        <Route
          path={pathsConfig.subscription}
          element={
            <ProtectedRoute>
              <SubscriptionPage onSubmit={handleChoiceSubscriptionAndPaymentMethod}/>
            </ProtectedRoute>
          }
        />
        <Route
          path={pathsConfig.payment}
          element={
            <ProtectedRoute>
              <PaymentPage onSubmit={handlePaymentCardSubmit}/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default connect(
  (state) => ({
    user: state.user,
    support: state.support,
  }),
  {
    registerUser,
    setUserSubscription,
    setUserPaymentMethod,
    setUserCardData,
    setUserPlatforms,
    setUserGames,
    clearUserData,
    openInfoPopup,
    closeInfoPopup
  }
)(App);
