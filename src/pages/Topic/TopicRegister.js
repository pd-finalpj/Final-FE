import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const TopicRegister =()=>{
  const title = useState("");
  const content = useState("");
  const token = localStorage.getItem("access_token");

  const TopicCrate=()=>{
    axios ({
        method: "post",
        url: "http://3.34.237.17:8080/notice",
        headers: {
          Token: `${token}`
        },
        data: {
          title: `${title}`,
          content: `${content}`
        }
    })
    .then((res) => {
          console.log(res.data.noticeId);
    })
  };
  
    return (
    <div>
        <div class="content">
        <div class="contentWrapper">
            <div class="helpHeader">
            <div class="helpTitle">
                <ol>
                    <li><a href="/cs/6/topics/">공지사항 등록</a></li>
                </ol>
        </div>
    </div>
    
    <div class="articleBottom">
        <p>공지사항 제목</p>
        <div class="helpSearch">
            <input type="text" id="helpSearch" name="helpSearch" placeholder="제목을 입력하세요"/>
        </div>
        </div>
        <p>공지사항 내용</p>
        <div class="helpSearch">
            <input type="text" id="content" name="helpSearch" placeholder="내용을 입력하세요" style={{height:"30em"}}/>
        </div>

        <div className="btn-section">
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

}
export default TopicRegister;