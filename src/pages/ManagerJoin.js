import axios from "axios";
import { React, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "../../src/components/style/css/Login.css";
// import $ from "jquery";

function Signup() {
  const [userId, setuserId] = useState("");
  const [name, setName] = useState("");
  const [nickname, setnickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setpwck] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");

  const [isuserId, setIsId] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isNick, setIsNick] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isphoneNumber, setIsphoneNumber] = useState(false);
  const [isPwck, setIspwck] = useState(false);
  const [isAge, setIsAge] = useState(false);
  const [isDepartment, setIsDepartment] = useState(false);

  const [userIdMessage, setuserIdMessage] = useState();
  const [nameMessage, setNameMessage] = useState("");
  const [nickMessage, setNickMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [phoneNumberMessage, setphoneNumberMessage] = useState();
  const [pwckMessage, setPwCkMessage] = useState();
  const [AgeMessage, setAgeMessage] = useState();
  const [DepartmentMessage, setDepartmentMessage] = useState("");
  const [color, setColor] = useState({ color: "#1739a9" });

  const onChangeuserId = useCallback((e) => {
    setuserId(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 12) {
      setuserIdMessage("2글자 이상 12글자 미만으로 입력해주세요.");
      setColor({ color: "red" });
      setIsId(false);
    } else {
      setuserIdMessage("올바른 아이디 형식입니다 :)");
      setIsId(true);
      setColor({ color: "blue" });
    }
  }, []);

  const onChangeName = useCallback((e) => {
    setName(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessage("2글자 이상 5글자 미만으로 입력해주세요.");
      setColor({ color: "red" });
      setIsName(false);
    } else {
      setNameMessage("올바른 이름 형식입니다 :)");
      setIsName(true);
      setColor({ color: "blue" });
    }
  }, []);

  const onchangeNick = useCallback((e) => {
    setnickname(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 11) {
      setNickMessage("2글자 이상 11글자 미만으로 입력해주세요.");
      setColor({ color: "red" });
      setIsNick(false);
    } else {
      setNickMessage("올바른 닉네임입니다 형식입니다 :)");
      setIsNick(true);
      setColor({ color: "blue" });
    }
  }, []);

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식이 틀렸어요! 다시 확인해주세요 ㅜ ㅜ");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식이에요 : )");
      setIsEmail(true);
    }
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호에요 : )");
      setIsPassword(true);
    }
  }, []);

  const onChangePwck = useCallback((e) => {
    setpwck(e.target.value);
    var check = document.getElementById("pwck").value;
    if (e.target.valuse !== check) {
      setPwCkMessage("비밀번호를 확인해주세요.");
      setIspwck(false);
    } else {
      setPwCkMessage("올바르게 입력되있습니다.");
      setIspwck(true);
    }
  }, []);

  const onChangephoneNumber = useCallback((e) => {
    setphoneNumber(e.target.value);
    if (e.target.value.length < 11 || e.target.value.length >= 12) {
      setphoneNumberMessage("전화번호 11자리를 입력해주세요!");
      setColor({ color: "red" });
      setIsphoneNumber(false);
    } else {
      setphoneNumberMessage("올바른 전화번호 형식입니다 :)");
      setIsphoneNumber(true);
      setColor({ color: "blue" });
    }
  }, []);

  const onchangedepartment = useCallback((e) => {
    setDepartment(e.target.value);
  }, []);

  const onChangeAge = useCallback((e) => {
    setAge(e.target.value);
    let agecheck = /^[0-9]+$/;
    const ageCurrent = e.target.value;

    setAge(ageCurrent);

    if (!agecheck.test(ageCurrent)) {
      setAgeMessage("잘못된거같아요!");
      setIsAge(false);
    } else {
      setAgeMessage("잘입력된거같아요! :)");
      setIsAge(true);
    }
  }, []);

  const onClicksignup = () => {
    console.log("click signup");
    console.log("ID : ", userId);
    console.log("PW : ", password);
    console.log("pwck:", passwordCheck);
    console.log("email", email);
    console.log("phonenumber", phoneNumber);
    axios({
      method: "post",
      url: "http://localhost:8080/api/user/signup",
      data: {
        userId: userId,
        name: name,
        age: age,
        nickname: nickname,
        email: email,
        passwordCheck: passwordCheck,
        password: password,
      },
    })
      .then((res) => {
        alert("다시 입력해주세요");
        document.location.href("join");
        // 작업 완료 되면 페이지 이동(새로고침)
      })
      .catch((error) => console.log(error.response));
  };
  return (
    <div
      className="signup-body-back"
      style={{ width: "40%", margin: "0 auto" }}
    >
      <div className="signup-body">
        <main className="form-signup">
          <form method="post">
            <div className="inner">
              <div className="headMessage">
                <h2>집을 마련하고싶을 땐?</h2>
                <h2 class="hlt">땅땅땅!</h2>
              </div>
            </div>
            {/* User Id */}
            <div className="form-floating">
              <input
                name="id"
                type="text"
                className="form-control UpdateSignUp_userId"
                placeholder="Id"
                id="floatingInput"
                typeName="Id"
                value={userId}
                onChange={onChangeuserId}
              />
              {userId.length > 0 && (
                <span className={`message ${isuserId ? "success" : "error"}`}>
                  {userIdMessage}
                </span>
              )}
            </div>
            {/* User name */}
            <div className="form-floating">
              <input
                name="name"
                type="text"
                className="form-control UpdateSignUp_name"
                placeholder="Name"
                id="floatingInput"
                typeName="name"
                value={name}
                onChange={onChangeName}
              />
              {name.length > 0 && (
                <span className={`message ${isName ? "success" : "error"}`}>
                  {nameMessage}
                </span>
              )}
            </div>
            {/* nickname */}
            <div className="form-floating" id="nickname">
              <input
                name="nickname"
                type="text"
                className="form-control UpdateSignUpnickname"
                id="floatingnickname"
                placeholder="nickname"
                typeName="nickname"
                value={nickname}
                onChange={onchangeNick}
              />
              {nickname.length > 0 && (
                <span className={`message ${isNick ? "success" : "error"}`}>
                  {nickMessage}
                </span>
              )}
            </div>
            {/* Email*/}
            <div className="form-floating" id="email">
              <input
                name="email"
                type="text"
                className="form-control UpdateSignUp_mbr_email"
                id="floatingemail"
                placeholder="email"
                typeName="email"
                value={email}
                onChange={onChangeEmail}
              />
              {email.length > 0 && (
                <span className={`message ${isEmail ? "success" : "error"}`}>
                  {emailMessage}
                </span>
              )}
            </div>
            {/* pw */}
            <div className="form-floating">
              <input
                name="password"
                type="text"
                className="form-control UpdateSignUp_mbr_pw"
                id="pwck"
                placeholder="password"
                value={password}
                onChange={onChangePassword}
              />
              {password.length > 0 && (
                <span className={`message ${isPassword ? "success" : "error"}`}>
                  {passwordMessage}
                </span>
              )}
            </div>
            {/* pwck*/}
            <div className="form-floating">
              <input
                name="passwordCheck"
                type="password"
                className="form-control UpdateSignUp_Password_ck"
                id="pwck"
                placeholder="password-check"
                value={passwordCheck}
                onChange={onChangePwck}
              />
              {passwordCheck.length > 0 && (
                <span className={`message ${isPwck ? "success" : "error"}`}>
                  {pwckMessage}
                </span>
              )}
            </div>
            {/* age*/}
            <div className="form-floating" id="age">
              <input
                name=""
                type="number"
                className="form-control UpdateSignUp_mbr_email"
                id="float age"
                placeholder="Age"
                value={age}
                onChange={onChangeAge}
              />
              {age.length > 0 && (
                <span className={`message ${isAge ? "success" : "error"}`}>
                  {AgeMessage}
                </span>
              )}
            </div>
            {/* nickname */}
            <div className="form-floating" id="department">
              <input
                name="department"
                type="text"
                className="form-control UpdateSignUpdepartment"
                id="floatingdepartment"
                placeholder="department"
                typeName="department"
                value={department}
                onChange={onchangedepartment}
              />
              {nickname.length > 0 && (
                <span className={`message ${isNick ? "success" : "error"}`}>
                  {nickMessage}
                </span>
              )}
            </div>
            {/* phone_number*/}
            <div className="form-floating" id="phoneNumber">
              <input
                name="phoneNumber"
                type="text"
                className="form-control UpdateSignUp_mbr_email"
                id="floatingphoneNumber"
                placeholder="phone_number"
                value={phoneNumber}
                onChange={onChangephoneNumber}
              />

              {phoneNumber.length > 0 && (
                <span
                  className={`message ${isphoneNumber ? "success" : "error"}`}
                >
                  {phoneNumberMessage}
                </span>
              )}
            </div>

            <div className="btn-section">
              <button className="signup-button" onClick={onClicksignup}>
                Sign up
              </button>
              <Link to="/ManagerLogin">
                <button className="signup-button" type="button">
                  cancel
                </button>
              </Link>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Signup;
