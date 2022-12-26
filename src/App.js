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
import ManagerLogin from "./pages/ManagerLogin";
<<<<<<< HEAD
=======
import AuctionResult from "./pages/AuctionResult";
>>>>>>> dc55d0e ( #13 [User]경매 내역)

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
<<<<<<< HEAD
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Join />} path="/join"></Route>
          <Route element={<Topic />} path="/Topic"></Route>
          <Route element={<TopicDetail />} path="/TopicDetail/:id"></Route>
          <Route element={<Detail />} path="/Detail/:id"></Route>
          <Route element={<Mypage />} path="/Mypage/:userId"></Route>
          <Route element={<Manager />} path="/Manager"></Route>
          <Route element={<Register />} path="/Register"></Route>
          <Route element={<Bookmark />} path="/Bookmark"></Route>
          <Route element={<ManagerJoin />} path="/ManagerJoin"></Route>
          <Route element={<TopiceRegister />} path="/TopicRegister"></Route>
          <Route element={<AuctionResult />} path="/mypage/mylab"></Route>
          <Route element={<TopiceRegister />} path="/TopicRegister"></Route>
          <Route element={<Bookmark />} path="/Bookmark"></Route>
          <Route element={<ManagerJoin />} path="/ManagerJoin"></Route>
          <Route element={<ManagerLogin />} path="/ManagerLogin"></Route>
        </Routes>
=======
        <BrowserRouter>
          <Routes>
            <Route element={<Main />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Join />} path="/join"></Route>
            <Route element={<Topic />} path="/Topic"></Route>
            <Route element={<TopicDetail />} path="/TopicDetail"></Route>
            <Route element={<Detail />} path="/Detail/:id"></Route>
            <Route element={<Mypage />} path="/Mypage"></Route>
            <Route element={<Manager />} path="/Manager"></Route>
            <Route element={<Register />} path="/Register"></Route>
            <Route element={<Bookmark />} path="/Bookmark"></Route>
            <Route element={<ManagerJoin />} path="/ManagerJoin"></Route>
            <Route element={<TopiceRegister />} path="/TopicRegister"></Route>
            <Route element={<ManagerLogin />} path="/ManagerLogin"></Route>
            <Route element={<AuctionResult />} path="/mypage/mylab"></Route>
          </Routes>
        </BrowserRouter>
>>>>>>> dc55d0e ( #13 [User]경매 내역)
      </RecoilRoot>
      <Footer></Footer>
    </div>
  );
}

export default App;
