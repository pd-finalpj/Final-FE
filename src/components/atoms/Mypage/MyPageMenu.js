import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../../../node_modules/axios/index";
import { useNavigate } from "../../../../node_modules/react-router-dom/dist/index";
import "./MyPage.css";
//중앙

const MyPageMenu = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const [datas, setDatas] = useState([]);

  const logout = () => {
    navigate(`/`);
    window.localStorage.removeItem("access_token");
  };
  useEffect(() => {
    axios
      .get(`http:///ddang3.link/api/user/`, {
        headers: {
          Token: `${token}`,
        },
      })
      .then(function (response) {
        // 성공 핸들링
        setDatas(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
      })
      .then(function () {
        // 항상 실행되는 영역
      });
  }, []);

  return (
    <div class="content-body_wrap">
      <section>
        <div class="section_title">
          <h5>나의경매</h5>
        </div>
        <div class="my-menu">
          <ul class="my-menu_list">
            <li>
              <Link to={`/mypage/mylab/id:${datas.userId}`}>
                <div class="my-menu-list_label">
                  <img
                    src="https://plab-football.s3.amazonaws.com/static/img/ic_myplab_color.svg"
                    alt="경매 내역"
                  ></img>
                  <p>경매내역</p>
                </div>
              </Link>
            </li>
            <li>
              <a href="/mypage/change/profile/">
                <div class="my-menu-list_label">
                  <img
                    src="https://plab-football.s3.amazonaws.com/static/img/ic_profile.svg"
                    alt="프로필수정"
                    width="18"
                    height="18"
                  ></img>
                  <div>
                    <p>프로필 수정</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <Link to={`/Bookmark/${datas.userId}`}>
                <div class="my-menu-list_label">
                  <img
                    src="https://plab-football.s3.amazonaws.com/static/img/ic_setting_color.svg"
                    alt="설정"
                  ></img>
                  <p>관심목록</p>
                </div>
              </Link>
            </li>
            <li>
              <div class="my-menu-list_label">
                <img
                  src="https://plab-football.s3.amazonaws.com/static/img/ic_logout_color.svg"
                  alt="로그아웃"
                ></img>
                <Link to="/">
                  <button onClick={logout}>로그아웃</button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div class="section_title">
          <h5>고객지원</h5>
          <div>
            <ul class="my-menu_list">
              <li>
                <a href="/topic">
                  <div class="my-menu-list_label">
                    <img
                      src="https://plab-football.s3.amazonaws.com/static/img/ic_notice_color.svg"
                      alt="공지사항"
                    ></img>
                    <p>공지사항</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="/mypage/myplab/">
                  <div class="my-menu-list_label">
                    <img
                      src="https://plab-football.s3.amazonaws.com/static/img/ic_faq_color.svg"
                      alt="자주 묻는 질문"
                    ></img>
                    <p>문의하기</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
export default MyPageMenu;
