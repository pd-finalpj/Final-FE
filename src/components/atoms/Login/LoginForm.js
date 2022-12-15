import "../../style/css/Login.css";
import "./Loginv2.css";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [userId, setInputId] = useState("");
  const [password, setInputPw] = useState("");

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
      url: "http://localhost:8080/user/login",
      data: {
        userId: userId,
        password: password,
      },
    })
      .then((res) => {
        console.log(res);
        console.log("res.data.userId :: ", res.data.userId);
        console.log("res.data.msg :: ", res.data.msg);
        if (res.data.userId === undefined) {
          // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
          console.log("======================", res.data.msg);
          alert("입력하신 id 가 일치하지 않습니다.");
        } else if (res.data.userId === null) {
          // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
          console.log(
            "======================",
            "입력하신 비밀번호 가 일치하지 않습니다."
          );
          alert("입력하신 비밀번호 가 일치하지 않습니다.");
        } else if (res.data.userId === userId) {
          // id, pw 모두 일치 userId = userId1, msg = undefined
          console.log("======================", "로그인 성공");
          sessionStorage.setItem("userid", userId); // sessionStorage에 id를 user_id라는 key 값으로 저장
          document.location.href = "/";
        }
        // 작업 완료 되면 페이지 이동(새로고침)
      })
      .catch((error) => console.log(error.response));
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
