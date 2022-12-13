import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Mypage from "./pages/Mypage"
import Manager from "./pages/Manager/ManagerMyPage"
import Footer from "./pages/Footer";
// import {createStore} from 'redux';
// import { Provider, useSelector, UseDispatch, connect } from 'react-redux';



function App() {
  const maincontent = {
    height: "100%",
  };
  return (
    <div style={maincontent}>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Join />} path="/join"></Route>
          <Route element={<Mypage />} path="/Mypage"></Route>
          <Route element={<Manager />} path="/Manager"></Route>
        </Routes>
      </BrowserRouter>
      <Footer>

      </Footer>
    </div>
  );
}


export default App;
