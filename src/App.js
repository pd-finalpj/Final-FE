import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Topic from "./pages/Topic/Topic.js";
import TopicDetail from "./pages/Topic/TopicDetail.js";
import Detail from "./pages/Detail";
import { RecoilRoot } from "recoil";
import Mypage from "./pages/Mypage";
import Manager from "./pages/Manager/ManagerMyPage";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Register from "./pages/Register";
import Bookmark from "./pages/Bookmark";
import ManagerJoin from "./pages/ManagerJoin";
import TopiceRegister from "./pages/Topic/TopicRegister";
import AuctionResult from "./pages/AuctionResult";


// import {createStore} from 'redux';
// import { Provider, useSelector, UseDispatch, connect } from 'react-redux';

function App() {
  const maincontent = {
    height: "100%",
  };

  return (
    <div style={maincontent}>
      <Header></Header>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route element={<Main />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Join />} path="/join"></Route>
            <Route element={<Topic />} path="/Topic"></Route>
            <Route element={<TopicDetail />} path="/TopicDetail"></Route>
            <Route element={<Detail />} path="/Detail/:dataId"></Route>
            <Route element={<Mypage />} path="/Mypage"></Route>
            <Route element={<Manager />} path="/Manager"></Route>
            <Route element={<Register />} path="/Register"></Route>
            <Route element={<Bookmark />} path="/Bookmark"></Route>
            <Route element={<ManagerJoin />} path="/ManagerJoin"></Route>
            <Route element={<TopiceRegister />} path="/TopicRegister"></Route>
            <Route element={<AuctionResult />} path="/mypage/mylab"></Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
      <Footer></Footer>
    </div>
  );
}

export default App;
