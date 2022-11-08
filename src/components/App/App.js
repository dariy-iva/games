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
import FeedSection from "../FeedSection/FeedSection";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import InfoPopup from "../InfoPopup/InfoPopup";
import {pathsConfig} from "../../utils/constants/pathList.js";
import {InfoPopupContext} from "../../context/InfoPopupContext";
import {infoPopupStatus, infoPopupText} from "../../utils/constants/textConstants";
import {vendorLinks} from "../../utils/constants/vendorLinks";

function App(props) {
  const {
    users,
    updateUserSubscription,
    updateUserPlatforms,
    updateUserGames,
    setCurrentUser,
    addUser,
    getUsersList,
  } = props;

  const history = useNavigate();

  const [infoPopup, setInfoPopup] = React.useState({isOpen: false, status: '', text: ''});

  function openInfoPopup(status, text) {
    setInfoPopup({
      isOpen: true,
      status: status,
      text: text,
    })
  }

  function getUserByName(name) {
    return users.usersList.find(user => user.name === name) || null;
  }

  function checkUserData(data) {
    const {name, password} = data;
    const currentUser = getUserByName(name);

    return !currentUser ? false : currentUser.password === password;
  }

  function handleRegister(dataUser) {
    addUser({
      name: dataUser.name,
      email: dataUser.email,
      password: dataUser.password,
      birthday: dataUser.birthday || ''
    });

    openInfoPopup(infoPopupStatus.success, infoPopupText.successRegistration)
    history(pathsConfig.login);
  }

  function handleLogin(dataUser) {
    const isSuccessCheckUser = checkUserData(dataUser);


    if (isSuccessCheckUser) {
      const user = getUserByName(dataUser.name);
      setCurrentUser(user);
      
      const nextPath = user.platforms.length
        ? pathsConfig.feed
        : pathsConfig.platformsChoice;
      history(nextPath);
    } else {
      openInfoPopup(infoPopupStatus.error, infoPopupText.errorLogin);
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
        window.open(vendorLinks.paypal.link);
        break;
      default:
        return;
    }
  }

  function handlePaymentCardSubmit(data) {
    const {number, name, date, code} = data;

    if (number && name && date && code) {
      openInfoPopup(infoPopupStatus.success, infoPopupText.successPayment);
    } else {
      openInfoPopup(infoPopupStatus.error, infoPopupText.errorPayment);
    }
  }

  React.useEffect(() => {
    getUsersList();
  }, [])

  return (
    <InfoPopupContext.Provider value={{infoPopup, setInfoPopup}}>
      <div className="page">
        <InfoPopup/>
        <Routes>
          <Route
            path={pathsConfig.register}
            element={<RegisterPage handleRegister={handleRegister}/>}
          />

          <Route path={pathsConfig.login} element={<LoginPage handleLogin={handleLogin}/>}/>

          <Route path={pathsConfig.resetPassword} element={<PasswordRecoveryPage/>}/>

          <Route exact path={pathsConfig.main} element={
            !(users.currentUser.name && users.currentUser.password) ? <StartPage onLogin={handleLogin}/> : <MainPage/>}>
            <Route
              path={pathsConfig.feed}
              element={
                <ProtectedRoute>
                  <FeedSection/>
                </ProtectedRoute>
              }
            />
            <Route
              path={pathsConfig.parties}
              element={
                <ProtectedRoute>
                  <div>123</div>
                </ProtectedRoute>
              }
            />
            <Route
              path={pathsConfig.chats}
              element={
                <ProtectedRoute>
                  <div>123</div>
                </ProtectedRoute>
              }
            />
            <Route
              path={pathsConfig.notifications}
              element={
                <ProtectedRoute>
                  <div>123</div>
                </ProtectedRoute>
              }
            />
            <Route
              path={pathsConfig.profile}
              element={
                <ProtectedRoute>
                  <div>123</div>
                </ProtectedRoute>
              }
            />
            )}
          </Route>

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

          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </div>
    </InfoPopupContext.Provider>
  );
}

export default connect(
  (state) => ({
    users: state.users,
  }),
  {
    updateUserSubscription,
    updateUserPlatforms,
    updateUserGames,
    setCurrentUser,
    addUser,
    getUsersList,
  }
)(App);
