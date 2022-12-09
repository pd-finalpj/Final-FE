import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Topic from "./pages/Topic/Topic.js";
import TopicDetail from "./pages/Topic/TopicDetail.js";
import {createStore} from 'redux';    
import { Provider, useSelector, UseDispatch, connect } from 'react-redux';



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
          <Route element={<Topic/>} path="/Topic"></Route>
          <Route element={<TopicDetail/> } path="/TopicDetail"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
