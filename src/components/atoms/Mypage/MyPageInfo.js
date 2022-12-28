// 왼쪽거
import React, { useEffect, useState } from "react";
import axios from "../../../../node_modules/axios/index";
import "./MyPage.css";
import "./MyPage2.css";

const MyPageInfo = () => {
  const [datas, setDatas] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    axios
      .get(`http:///3.34.237.17:8080/api/user/`, {
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

  useEffect(() => {
    axios
      .get(`http:///3.34.237.17:8080/api/bookmark`, {
        headers: {
          Token: `${token}`,
        },
      })
      .then(function (response) {
        // 성공 핸들링
        setBookmark(response.data);
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
    <div class="content-body_left-wrap">
      <section>
        <div
          style={{
            display: "flex",
            justifycontent: "space-between",
            alignitems: "center",
          }}
        >
          <div className="my-profile">
            <div style={{ display: "flex", alignitems: "center" }}>
              <h1 className="my-profile_name">{datas.name}</h1>
            </div>
          </div>
        </div>
        <div className="my-status">
          <li className="my-status_item my-status_item-double">
            <a href="/mypage/mymanner/">
              <div className="my-status_label">
                <p style={{ fontSize: "12px" }}>관심 물건</p>
              </div>
              <div className="my-status_content">{bookmark.bookmarkCount}</div>
            </a>
          </li>
          <li className="my-status_item my-status_item-double">
            <div className="my-status_label">
              <a href="/magazine/1/" style={{ fontSize: "12px" }}>
                생년월일
              </a>
            </div>
            <a href="/mypage/mylevel/">
              <div className="my-status_content">
                <div className="lv-system_title">
                  <div>
                    <div className="lv-system_name">
                      <h4>{datas.birth}</h4>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </a>
          </li>
          <li className="my-status_item my-status_item-cash">
            <div>
              <p style={{ fontSize: "12px" }}>이메일</p>
              <p style={{ fontSize: "20px", fontweight: "700" }}>
                {datas.email}
              </p>
            </div>
            <a href="/cash/charge">
              <div className="my-cash">
                <span>바로가기</span>
              </div>
            </a>
          </li>
          <li className="my-status_item my-status_item-banner">
            <div>
              함께 만들어요<br></br>경매 문화
            </div>
            <div>
              <img
                width="64px"
                src="https://plab-football.s3.amazonaws.com/static/img/img_be_manner.png"
                alt=""
              ></img>
            </div>
          </li>
        </div>
      </section>
    </div>
  );
};
export default MyPageInfo;
