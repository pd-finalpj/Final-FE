import React from "react";
import Nav from "../components/atoms/Nav/Nav";
import Slide from "../components/atoms/Slide/Slide";
import Navday from "../components/atoms/Navday/Day";
import ActionList from "../components/atoms/actionlist/actionlist";
const Main = () => {
  return (
    <div>
      <Nav />
      <Slide />
      <Navday />
      <ActionList />
    </div>
  );
};
export default Main;
