import "../../style/css/Login.css";
import "./Loginv2.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [userId, setInputId] = useState("");
  const [password, setInputPw] = useState("");
  const navigate = useNavigate();
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    console.log("click login");
    console.log("ID : ", userId);
    console.log("PW : ", password);
    axios({
      method: "post",
      url: "http://3.34.237.17:8080/user/login",
      data: {
        userId: userId,
        password: password,
      },
    })
      .then(function (response) {
        if (response.ACCESS_TOKEN) {
          console.log(response.data);
          localStorage.setItem("accessToken", response.ACCESS_TOKEN);
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("아이디와 비밀번호를 확인해주세요!!");
      });
  };
  return (
    <div className="main">
      <div className="inner">
        <div className="headMessage">
          <h2>집을 마련하고싶을 땐?</h2>
          <h2 className="hlt">땅땅땅!</h2>
        </div>
        <form>
          <input
            type="hidden"
            name="csrfmiddlewaretoken"
            value="XdFyRmqh5CYDLzi9T0E1jCZvMw0xSnmHRnxlVdIXvZBHT1L0xW1xhLhAF9gitVcQ"
          />
          <fieldset>
            <div classNameName="inputWrap">
              <input
                type="text"
                name="userId"
                autofocus=""
                required=""
                id="userId"
                value={userId}
                onChange={handleInputId}
                placeholder="아이디"
              />
            </div>
            <div className="inputWrap">
              <input
                type="password"
                name="password"
                required=""
                id="password"
                value={password}
                onChange={handleInputPw}
                placeholder="비밀번호"
              />
            </div>
          </fieldset>
          <input type="checkbox" id="saveID" value="" name="#" />
          <div className="btn-wrap">
            <button type="button" onClick={onClickLogin} className="login-btn">
              로그인
            </button>
          </div>
          <div className="login_text">
            <a href="/join">
              <span className="idfont">회원가입</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
