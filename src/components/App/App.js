import React from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import './App.css';
import MainPage from "../pages/MainPage.js";
import Register from "../Register/Register";
import Login from "../Login/Login";

function App() {
  const history = useNavigate();

  function handleRegister(dataUser) {
    console.log( dataUser );
    history( "/games" );
  }

  return (
    <div className="page">
      <Routes>
        <Route exact path="/games" element={<MainPage/>}/>
        <Route
          path="/games/signup"
          element={<Register handleRegister={handleRegister}/>}
        />
        <Route path="/games/signin" element={<Login handleLogin={""}/>}/>
      </Routes>
    </div>
  );
}

export default App;
