import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "../../../../node_modules/react-router-dom/dist/index";
import "./MyPage.css";
//중앙

const MyPageMenu = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate(`/`);
    window.localStorage.removeItem("access_token");
  };

  return (
    <div class="content-body_wrap">
      <section>
        <div class="section_title">
          <h5>나의경매</h5>
        </div>
        <div class="my-menu">
          <ul class="my-menu_list">
            <li>
              <a href="/mypage/mylab/">
                <div class="my-menu-list_label">
                  <img
                    src="https://plab-football.s3.amazonaws.com/static/img/ic_myplab_color.svg"
                    alt="경매 내역"
                  ></img>
                  <p>경매내역</p>
                </div>
              </a>
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
              <a href="/mypage/change/general/">
                <div class="my-menu-list_label">
                  <img
                    src="https://plab-football.s3.amazonaws.com/static/img/ic_setting_color.svg"
                    alt="설정"
                  ></img>
                  <p>관심목록</p>
                </div>
              </a>
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
