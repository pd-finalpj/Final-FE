import "../../style/css/Login.css";
import "./Loginv2.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [userId, setuserId] = useState("");
  const [password, setPw] = useState("");
  const navigate = useNavigate();

  const onClickLogin = () => {
    axios({
      method: "post",
      url: "http://3.34.237.17:8080/api/user/login",
      data: {
        userId: userId,
        password: password,
      },
    })
      .then((res) => {
        console.log(res.data.accessToken);
        //데이터에 access_token이 있다면
        localStorage.setItem("access_token", res.data.accessToken);
        alert("로그인 성공");
        navigate("/");
        console.log(res.data.accessToken);
        document.cookie = `UserId=${userId}`;
      })
      .catch((res) => {
        // 로그인 실패 시
        alert("존재하지않는아이디 이거나 비밀번호가 틀립니다.");
      });
  };

  return (
    <div className="main">
      <div className="inner">
        <div className="headMessage">
          <h2>집을 마련하고싶을 땐?</h2>
          <h2 className="hlt">땅땅땅!</h2>
        </div>
        <input type="hidden" name="csrfmiddlewaretoken"></input>
        <fieldset>
          <div classNameName="inputWrap">
            <input
              type="text"
              name="userId"
              autofocus=""
              id="userId"
              value={userId}
              onChange={(e) => {
                setuserId(e.target.value);
              }}
              placeholder="아이디"
            />
          </div>
          <div className="inputWrap">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPw(e.target.value);
              }}
              placeholder="비밀번호"
            />
          </div>
        </fieldset>
        <input type="checkbox" id="saveID" value="" name="#" />
        <div className="btn-wrap">
          <button type="submit" onClick={onClickLogin} className="login-btn">
            로그인
          </button>
        </div>
        <div className="login_text">
          <a href="/join">
            <span className="idfont">회원가입</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Login;
