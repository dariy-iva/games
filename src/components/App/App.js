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
    history( "/" );
  }

  return (
    <div className="page">
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route
          path="/signup"
          element={<Register handleRegister={handleRegister}/>}
        />
        <Route path="/signin" element={<Login handleLogin={""}/>}/>
      </Routes>
    </div>
  );
}

export default App;
