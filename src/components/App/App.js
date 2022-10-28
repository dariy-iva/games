import React from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {
  getUsersList,
  addUser,
  setCurrentUser,
  updateUserSubscription,
  updateUserPlatforms,
  updateUserGames,
  clearCurrentUser,
} from "../../redux/slices/usersSlice";
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
import MainPage from "../pages/MainPage/MainPage";
import {pathsConfig} from "../../utils/constants/pathList.js";
import InfoPopup from "../InfoPopup/InfoPopup";
import {openInfoPopup, closeInfoPopup } from "../../redux/slices/supportSlice";

function App(props) {
  const {
    users,
    updateUserSubscription,
    updateUserPlatforms,
    updateUserGames,
    clearCurrentUser,
    setCurrentUser,
    support,
    openInfoPopup,
    closeInfoPopup,
    addUser,
    getUsersList,
  } = props;

  const history = useNavigate();

  function getUserByName(name) {
    return users.usersList.find(user => user.name === name) || null;
  }

  function checkUserData(data) {
    const {name, password} = data;
    const currentUser = getUserByName(name);

    return !currentUser ? false : currentUser.password === password;
  }

  function handleRegister(dataUser) {
    addUser({name: dataUser.name,
      email: dataUser.email,
      password: dataUser.password,
      birthday: dataUser.birthday || ''});

    openInfoPopup({status: 'success', text: 'Registration was successful'});
    history(pathsConfig.login);
  }

  function handleLogin(dataUser) {
    const isSuccessCheckUser = checkUserData(dataUser);

    if (isSuccessCheckUser) {
      setCurrentUser(getUserByName(dataUser.name));
      history(pathsConfig.platformsChoice);
    } else {
      openInfoPopup({
        status: 'error',
        text: 'User name or password entered incorrectly. Please, try again or let us know about the problem.'
      });
    }
  }

  function handleChoicePlatforms(data) {
    updateUserPlatforms(data);
    history(pathsConfig.gamesChoice);
  }

  function handleChoiceGames(data) {
    updateUserGames(data);
    history(pathsConfig.subscription);
  }

  function handleChoiceSubscription(data) {
    const {paymentMethod, subscription} = data;

    updateUserSubscription(subscription);

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

    if (number, name, date, code) {
      openInfoPopup({status: 'success', text: 'The payment was successful. Thank you for your trust'});
    } else {
      openInfoPopup({status: 'error', text: 'Sorry, payment failed'});
    }
  }

  React.useEffect(() => {
    getUsersList();
  }, [])

  return (
    <div className="page">
      <InfoPopup/>
      <Routes>
        <Route exact path={pathsConfig.main} element={
          !(users.currentUser.name && users.currentUser.password) ? <StartPage onLogin={handleLogin}/> : <MainPage/>}>
          <Route
            path={pathsConfig.feed}
            element={
              // <ProtectedRoute>
                <div>123</div>
              // </ProtectedRoute>
            }
          />
          <Route
            path={pathsConfig.parties}
            element={
              // <ProtectedRoute>
                <div>123</div>
              // </ProtectedRoute>
            }
          />
          <Route
            path={pathsConfig.chats}
            element={
              // <ProtectedRoute>
                <div>123</div>
              // </ProtectedRoute>
            }
          />
          <Route
            path={pathsConfig.notifications}
            element={
              // <ProtectedRoute>
                <div>123</div>
              // </ProtectedRoute>
            }
          />
          <Route
            path={pathsConfig.profile}
            element={
              // <ProtectedRoute>
                <div>123</div>
              // </ProtectedRoute>
            }
          />
          )}
        </Route>

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
              <SubscriptionPage onSubmit={handleChoiceSubscription}/>
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
    users: state.users,
    support: state.support,
  }),
  {
    updateUserSubscription,
    updateUserPlatforms,
    updateUserGames,
    clearCurrentUser,
    openInfoPopup,
    closeInfoPopup,
    setCurrentUser,
    addUser,
    getUsersList,
  }
)(App);
