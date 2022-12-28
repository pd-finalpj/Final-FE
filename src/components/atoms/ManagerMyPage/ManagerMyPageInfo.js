// 왼쪽거
import React, { useEffect, useState } from "react";
import axios from "../../../../node_modules/axios/index";
import { Navigate } from "../../../../node_modules/react-router-dom/dist/index";
import "../Mypage/MyPage.css";

const ManagerMyPageInfo = () => {
  const [datas, setDatas] = useState([]);
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    axios
      .get(`http:///ddang3.link/manager/`, {
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

  const logout = () => {
    Navigate(`/ManagerLogin`);
    window.localStorage.removeItem("access_token");
  };

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
              <h1 className="my-profile_name">관리자 {datas.name}</h1>
            </div>
          </div>
        </div>
        <div className="my-status">
          <li className="my-status_item my-status_item-double">
            <a href="/mypage/mymanner/">
              <div className="my-status_label">
                <p style={{ fontSize: "12px" }}>등록 물건</p>
              </div>
              <div className="my-status_content">세종로28 사피엔스빌</div>
            </a>
          </li>
          <li className="my-status_item my-status_item-double">
            <div className="my-status_label">
              <a href="/magazine/1/" style={{ fontSize: "12px" }}>
                최근 경매 종료 물건
              </a>
            </div>
            <a href="/mypage/mylevel/">
              <div className="my-status_content">
                <div className="lv-system_title">
                  <div>
                    <div className="lv-system_name">
                      <h4>범안로 프라우드빌</h4>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </a>
          </li>
          <li className="my-status_item my-status_item-cash">
            <div>
              <p style={{ fontSize: "12px" }}>관리자</p>
              <p style={{ fontSize: "20px", fontweight: "700" }}>윤이도</p>
            </div>
            <a href="/cash/charge">
              <div className="my-cash">
                <span>진행 중인물건</span>
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
                alt="qqq"
              ></img>
            </div>
          </li>
        </div>
      </section>
    </div>
  );
};
export default ManagerMyPageInfo;
