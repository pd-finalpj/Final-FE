import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../node_modules/axios/index";
import Cookies from "../../node_modules/react-cookie/cjs/Cookies";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import "../components/style/css/Header.css";

const Header = () => {
  const [search, setSearch] = useState("");
  const [datas, setDatas] = useState([]);
  const [state, setState] = useState(
    localStorage.getItem("access_token") ? true : false
  );
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const nav = useNavigate();
  const urlFunc = () => {
    const url = localStorage.getItem("access_token")
      ? `/Mypage/id:${datas.userId}`
      : `/login`;
    nav(url);
  };
  // console.log(datas);
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    axios
      .get(`http:///3.34.237.17:8080/api/user/`, {
        headers: {
          Token: `${token}`,
        },
      })
      .then(function (response) {
        // 성공 핸들링
        setDatas(response.data);
        setState(true);
      })
      .catch(function (error) {
        // 에러 핸들링
        setState(false);
      });
  }, []);

  return (
    <nav class="headerNavbar">
      <div class="headerNavbarLogo">
        <a href="/">
          <img
            id="logo"
            src="https://ifh.cc/g/D9bX3q.png"
            border="0"
            alt="사이트로고"
            height="80"
            width="80"
          ></img>
        </a>
        {/* 땅땅땅이미지https://ifh.cc/g/D9bX3q.png 땅3 이미지https://ifh.cc/g/QxNCbw.png */}
      </div>
      <div>
        <div class="headerNavbarMain" style={{ display: "flex" }}>
          <div style={{ padding_top: "0.3em" }}>
            <img
              style={{ margin_top: "2em", cursor: "pointer" }}
              src="https://ifh.cc/g/mgQWrl.png"
              border="0"
              alt="마이페이지아이콘"
              height="20"
              onClick={urlFunc}
            ></img>

            {/* {datas.userId ? (
              <Link to={`/Mypage/id:${datas.userId}`}>
                <img
                  style={{ margin_top: "2em" }}
                  src="https://ifh.cc/g/mgQWrl.png"
                  border="0"
                  alt="마이페이지아이콘"
                  height="20"
                ></img>
              </Link>
            ) : (
              <Link to={`/login`}>
                <img
                  style={{ margin_top: "2em" }}
                  src="https://ifh.cc/g/mgQWrl.png"
                  border="0"
                  alt="마이페이지아이콘"
                  height="20"
                ></img>
              </Link>
            )} */}
          </div>
        </div>
      </div>
      {/* <div class="headerNavbarLinks">
                //마이페이지 아이콘
                <a href="" target='_blank'><img src='https://ifh.cc/g/mgQWrl.png' border='0' alt="마이페이지아이콘" height="30"></img></a>
            </div> */}
    </nav>
  );
};

export default Header;
