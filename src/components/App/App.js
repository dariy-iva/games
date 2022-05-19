import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import MainPage from "../pages/MainPage.js";
import Register from "../Register/Register";
import Login from "../Login/Login";


function App() {
  return (
    <div className="page">
      <Routes>
        <Route exact path="/" element={<MainPage handleRegister={""} />} />
        <Route
          path="/signup"
          element={<Register />}
        />
        <Route path="/signin" element={<Login handleLogin={""} />} />
      </Routes>
    </div>
  );
}

export default App;
