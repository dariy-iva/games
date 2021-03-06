import React from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import './App.css';
import MainPage from "../pages/MainPage.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import PasswordRecoveryPage from '../pages/PasswordRecoveryPage/PasswordRecoveryPage.js';
import PlatformChoicePage from "../pages/PlatformChoicePage/PlatformChoicePage";
import GamesChoicePage from "../pages/GamesChoicePage/GamesChoicePage";
import SubscriptionPage from "../pages/SubscriptionPage/SubscriptionPage";
import {pathsConfig} from "../../utils/constants/pathList.js";

function App() {
  const history = useNavigate();

  function handleRegister(dataUser) {
    history( pathsConfig.login );
  }

  function handleLogin() {
    history( pathsConfig.platformsChoice );
  }

  function handleChoicePlatforms() {
    history( pathsConfig.gamesChoice );
  }

  function handleChoiceGames() {
    history( pathsConfig.subscription );
  }

  function handleChoiceSubscription(subscriptionData) {
    if (subscriptionData.payment === 'paypal') {
      window.open('https://www.paypal.com');
    }
    if (subscriptionData.payment === 'card') {

    }
  }


  return (
    <div className="page">
      <Routes>
        <Route exact path="/games" element={<MainPage/>}/>
        <Route
          path={pathsConfig.register}
          element={<Register handleRegister={handleRegister}/>}
        />
        <Route path={pathsConfig.login} element={<Login handleLogin={handleLogin}/>}/>
        <Route path={pathsConfig.resetPassword} element={<PasswordRecoveryPage handleResetPassword={""}/>}/>
        <Route path={pathsConfig.platformsChoice} element={<PlatformChoicePage onSubmit={handleChoicePlatforms}/>}/>
        <Route path={pathsConfig.gamesChoice} element={<GamesChoicePage onSubmit={handleChoiceGames}/>}/>
        <Route path={pathsConfig.subscription} element={<SubscriptionPage onSubmit={handleChoiceSubscription}/>}/>
      </Routes>
    </div>
  );
}

export default App;
