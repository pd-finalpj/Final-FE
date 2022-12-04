import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import './App.css';
import Main from'./pages/Main';
import Header from'./components/molecules/header/header'
function App() {
  const maincontent = {
    height: "100%",
  };
  return (
   <div style={maincontent}>
    <BrowserRouter>
    <Routes>
    <Route element={<Main/>} path="/"/>
    <Route element={<Header/>} path="/header"/>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
