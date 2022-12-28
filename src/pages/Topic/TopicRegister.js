import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./TopicRegister.css";

const TopicRegister = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const token = localStorage.getItem("access_token");

  const TopicCrate = () => {
    axios({
      method: "post",
      url: "https://ddang3.link/api/notice",
      headers: {
        Token: `${token}`,
      },
      data: {
        title: title,
        content: content,
      },
    }).then((res) => {
      window.location.replace(`/Topic`);
      console.log(res.data.noticeId);
    });
  };

  return (
    <div>
      <div class="content">
        <div class="contentWrapper">
          <div class="helpHeader">
            <div class="helpTitle">
              <ol>
                <li>
                  <h2 href="/cs/6/topics/">공지사항 등록</h2>
                </li>
              </ol>
            </div>
          </div>

          <div class="articleBottom">
            <h3>공지사항 제목</h3>
            <div class="helpSearch">
              <input
                type="text"
                id="helpSearch"
                name="helpSearch"
                placeholder="제목을 입력하세요"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
          </div>
          <h3>공지사항 내용</h3>
          <div class="helpSearch">
            <input
              type="text"
              id="content"
              name="helpSearch"
              placeholder="내용을 입력하세요"
              style={{ height: "30em" }}
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </div>

          <div className="btnsection">
            <button className="createTopic-button" onClick={TopicCrate}>
              생성
            </button>

            <Link to="/topic">
              <button
                className="createTopic-button"
                type="button"
                href=".pages/topic"
              >
                취소
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopicRegister;
