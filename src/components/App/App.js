import React from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import './App.css';
import MainPage from "../pages/MainPage.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import {pathsConfig} from "../../utils/constants/stringConstants.js";

function App() {
  const history = useNavigate();

  function handleRegister(dataUser) {
    console.log( dataUser );
    history( pathsConfig.main );
  }

  return (
    <div className="page">
      <Routes>
        <Route exact path="/games" element={<MainPage/>}/>
        <Route
          path={pathsConfig.register}
          element={<Register handleRegister={handleRegister}/>}
        />
        <Route path={pathsConfig.login} element={<Login handleLogin={""}/>}/>
      </Routes>
    </div>
  );
}

export default App;
