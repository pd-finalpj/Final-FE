import React, { useState } from "react";
import Nav from "../components/atoms/Nav/Nav";
import Slide from "../components/atoms/Slide/Slide";
import Navday from "../components/atoms/Navday/Day";
import ActionList from "../components/atoms/actionlist/actionlist";
const Main = () => {
  const [isClick, setClicked] = useState();
  return (
    <div>
      <Nav />
      <Slide />
      <Navday isClick={isClick} setClicked={setClicked} />
      <ActionList isClick={isClick} />
    </div>
  );
};
export default Main;
