import React from "react";
import logo from './img/logo.png';
import header from './img/header.png';
import arrow from './img/arrow.png';
import './App.css';
function App() {
  return (
    <>
    <div className="curtain__main">
      <img className="cur_logo" src={logo}></img>
      <button className="cur_button"><img className="cur_arrow" src={arrow}></img></button>
    </div>
    <div className="container__main">
      <img className="con__image" src={header} alt="" />
      <h1 className="con__heading">Let’s find your perfect pair!</h1>
      <p className="con__pararahraph">Take the quiz to easily discover your perfect fit from thousands of styles</p>
      <button className="con__button">Start Now</button>
    </div>
    </>
  );
}

export default App;
