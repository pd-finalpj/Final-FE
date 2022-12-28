import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../../node_modules/axios/index";

const TopicDetail = () => {
  let urlaxios = useParams();
  const [datas, setDatas] = useState([]);
  const [load, setLoad] = useState(false);
  console.log(urlaxios);
  useEffect(() => {
    axios
      .get(`http:///3.34.237.17:8080/api/notice/${urlaxios.id}`)
      .then(function (response) {
        // 성공 핸들링
        console.log(response);
        setDatas(response.data);
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
    <div>
      <div class="content">
        <div class="contentWrapper">
          <div class="helpHeader">
            <div class="helpTitle">
              <ol>
                <li>
                  <a href="/cs/6/topics/">공지사항</a>
                </li>
              </ol>
            </div>
          </div>
          <div class="articleWrap">
            <div class="articleTitle">
              <h1>{datas.title}</h1>
            </div>
            <div class="articleBody">
              <pre></pre>
              <ul class="helpTagWrap">
                <p>{datas.content}</p>
              </ul>

              <div class="evlauation" id="selected_default">
                <p>이동하기</p>
                <div class="btnWrap">
                  <div class="btnWrapper">
                    <Link to="/Topic">
                      <span
                        class="btn vote"
                        style={{ cursor: "pointer" }}
                        onclick="pressedYesButton()"
                      >
                        목록으로
                      </span>
                    </Link>
                    <Link to="/">
                      <span
                        class="btn vote"
                        style={{ cursor: "pointer" }}
                        onclick="pressedNoButton()"
                      >
                        메인페이지
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopicDetail;
