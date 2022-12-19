// 왼쪽거
import React from "react";
import "./MyPage.css";
import "./MyPage2.css";

const MyPageInfo = () => {
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
              <h1 className="my-profile_name">임성민</h1>
            </div>
          </div>
        </div>
        <div className="my-status">
          <li className="my-status_item my-status_item-double">
            <a href="/mypage/mymanner/">
              <div className="my-status_label">
                <p style={{ fontSize: "12px" }}>관심 물건</p>
              </div>
              <div className="my-status_content">ㅁㅁ</div>
            </a>
          </li>
          <li className="my-status_item my-status_item-double">
            <div className="my-status_label">
              <a href="/magazine/1/" style={{ fontSize: "12px" }}>
                최근 열람 물건
              </a>
            </div>
            <a href="/mypage/mylevel/">
              <div className="my-status_content">
                <div className="lv-system_title">
                  <div>
                    <div className="lv-system_name">
                      <h4>ㅁㅁ</h4>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </a>
          </li>
          <li className="my-status_item my-status_item-cash">
            <div>
              <p style={{ fontSize: "12px" }}>111</p>
              <p style={{ fontSize: "20px", fontweight: "700" }}>222</p>
            </div>
            <a href="/cash/charge">
              <div className="my-cash">
                <span>333</span>
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
