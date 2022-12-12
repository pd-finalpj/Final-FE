import "../../style/css/Login.css";
import "./Loginv2.css";
const Login = () => {
  return (
    <div className="main">
      <div className="inner">
        <div className="headMessage">
          <h2>집을 마련하고싶을 땐?</h2>
          <h2 className="hlt">땅땅땅!</h2>
        </div>
        <form method="post" action="http://localhost:8080/user/login  ">
          <input
            type="hidden"
            name="csrfmiddlewaretoken"
            value="XdFyRmqh5CYDLzi9T0E1jCZvMw0xSnmHRnxlVdIXvZBHT1L0xW1xhLhAF9gitVcQ"
          />
          <fieldset>
            <div classNameName="inputWrap">
              <input
                type="text"
                name="username"
                autofocus=""
                required=""
                id="id_username"
                placeholder="아이디"
              />
            </div>
            <div className="inputWrap">
              <input
                type="password"
                name="password"
                required=""
                id="id_password"
                placeholder="비밀번호"
              />
            </div>
          </fieldset>
          <input type="checkbox" id="saveID" value="" name="#" />
          <div className="btn-wrap">
            <button type="submit" onclick="test()" className="login-btn">
              로그인
            </button>
          </div>
          <div className="login_text">
            <a href="/join">
              <span classNamename="idfont">회원가입</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
