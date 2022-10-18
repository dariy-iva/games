import React from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {setUser, clearUser} from "../../redux/slices/userSlice";
import './App.css';
import MainPage from "../pages/MainPage.js";
import RegisterPage from "../pages/RegisterPage/RegisterPage.js";
import LoginPage from "../pages/LoginPage/LoginPage.js";
import PasswordRecoveryPage from '../pages/PasswordRecoveryPage/PasswordRecoveryPage.js';
import PlatformChoicePage from "../pages/PlatformChoicePage/PlatformChoicePage";
import GamesChoicePage from "../pages/GamesChoicePage/GamesChoicePage";
import SubscriptionPage from "../pages/SubscriptionPage/SubscriptionPage";
import {pathsConfig} from "../../utils/constants/pathList.js";

function App(props) {
  const {user, setUser, clearUser} = props;

  const history = useNavigate();

  function handleRegister(dataUser) {
    history(pathsConfig.login);
  }

  function handleLogin() {
    history(pathsConfig.platformsChoice);
  }

  function handleChoicePlatforms() {
    history(pathsConfig.gamesChoice);
  }

  function handleChoiceGames() {
    history(pathsConfig.subscription);
  }

  function handleChoiceSubscriptionAndPayment() {
    history(pathsConfig.feed);
  }

  return (
    <div className="page">
      <Routes>
        <Route exact path={pathsConfig.main} element={<MainPage onLogin={handleLogin}/>}/>
        <Route
          path={pathsConfig.register}
          element={<RegisterPage handleRegister={handleRegister}/>}
        />
        <Route path={pathsConfig.login} element={<LoginPage handleLogin={handleLogin}/>}/>
        <Route path={pathsConfig.resetPassword} element={<PasswordRecoveryPage handleResetPassword={""}/>}/>
        <Route path={pathsConfig.platformsChoice} element={<PlatformChoicePage onSubmit={handleChoicePlatforms}/>}/>
        <Route path={pathsConfig.gamesChoice} element={<GamesChoicePage onSubmit={handleChoiceGames}/>}/>
        <Route path={pathsConfig.subscription}
               element={<SubscriptionPage onSubmit={handleChoiceSubscriptionAndPayment}/>}/>
      </Routes>
    </div>
  );
}

export default connect(
  (state) => ({
    user: state.user.user,
  }),
  {setUser, clearUser}
)(App);
