import "../../components/style/css/main.css";
import Nav from "../../components/atoms/Nav/Nav.js";
import axios from "axios";
import { useEffect, useState } from "react";

const Topic = () => {
  const [datas, setDatas] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoad(true);
      try {
        const response = await axios.get(
          "http:///ddang3.link/api/notice-list"
        );
        console.log(response.data);
        setDatas(response.data.noticeDetailsResponseList);
      } catch (e) {
        console.log(e);
      }
      setLoad(false);
    };
    fetchData();
  }, []);

  return (
    <div className="mainwrap">
      <Nav />
      <div className="content">
        <div className="contentWrapper"></div>
        <div className="topicBubble">
          <h1 className="helpBB active" href="#">
            공지사항
          </h1>
        </div>

        <div className="topicList">
          <ul>
            {load ? (
              <div>불러오는 중입니다</div>
            ) : (
              datas.map((noticeDetailsResponseList) => (
                <li
                  key={noticeDetailsResponseList.noticeId}
                  noticeDetailsResponseList={noticeDetailsResponseList}
                >
                  <a
                    href={`/TopicDetail/${noticeDetailsResponseList.noticeId}`}
                  >
                    <p className="time"></p>
                    <h2>{noticeDetailsResponseList.title}</h2>
                  </a>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Topic;
