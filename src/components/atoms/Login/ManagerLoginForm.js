import "../../style/css/Login.css";
import "./Loginv2.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ManagerLogin = () => {
  const [managerId, setManagerId] = useState("");
  const [password, setPw] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  let urlaxios = useParams();

  const onClickManagerLogin = () => {
    axios({
      method: "post",
      url: "https://ddang3.link/api/manager/login",
      headers: {
        Token: `${token}`,
      },
      data: {
        managerId: managerId,
        password: password,
      },
    })
      .then((res) => {
        console.log(res.data.accessToken);
        //데이터에 access_token이 있다면
        localStorage.setItem("access_token", res.data.accessToken);
        alert("로그인 성공");
        navigate(`/Manager/${urlaxios.id}`);
        console.log(res.data.accessToken);
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
          <h2>관리자 로그인 페이지입니다</h2>
          <h2 className="hlt">땅땅땅!</h2>
        </div>
        <input
          type="hidden"
          name="csrfmiddlewaretoken"
          value="XdFyRmqh5CYDLzi9T0E1jCZvMw0xSnmHRnxlVdIXvZBHT1L0xW1xhLhAF9gitVcQ"
        />
        <fieldset>
          <div classNameName="inputWrap">
            <input
              type="text"
              name="managerId"
              autofocus=""
              id="managerId"
              value={managerId}
              onChange={(e) => {
                setManagerId(e.target.value);
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
          <button
            type="submit"
            onClick={onClickManagerLogin}
            className="login-btn"
          >
            로그인
          </button>
        </div>
        <div className="login_text">
          <a href="/ManagerJoin">
            <span className="idfont">회원가입</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ManagerLogin;
