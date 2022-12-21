import React from "react";
import "./Loginv2.css";

const LoginImg = () => {
  var index = 0; //이미지에 접근하는 인덱스
  window.onload = function () {
    slideShow();
  };

  function slideShow() {
    var i;
    var x = document.getElementsByClassName("slide1"); //slide1에 대한 dom 참조
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; //처음에 전부 display를 none으로 한다.
    }
    index++;
    if (index > x.length) {
      index = 1; //인덱스가 초과되면 1로 변경
    }
    x[index - 1].style.display = "block"; //해당 인덱스는 block으로
    setTimeout(slideShow, 4000); //함수를 4초마다 호출
  }

  return (
    <div className="loginimg">
      <img alt="loginimg" class="slide1" src="/Image/login/Login1.jpg" />
      <img alt="loginimg" class="slide1" src="/Image/login/Login2.jpg" />
      <img alt="loginimg" class="slide1" src="/Image/login/Login3.png" />
    </div>
  );
};
export default LoginImg;
