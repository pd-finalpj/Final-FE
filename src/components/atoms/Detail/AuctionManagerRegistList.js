import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import axios from "axios";
import "./AuctionResultDetails.css";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "../../../../node_modules/react-router-dom/dist/index";

const AuctionManagerRegistList = () => {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  const [item, setItem] = useState([]);
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState("");
  const [found, setFound] = useState([]);

  const [ref, inView] = useInView();

  const onClickDetail = (auctionId) => {
    navigate(`/Detail/${auctionId}`);
  };
  const onClickDelete = (auctionId) => {
    const token = localStorage.getItem("access_token");
    window.location.reload();
    axios({
      method: "Delete",
      url: `https://ddang3.link/api/auction/${auctionId}`,
      data: {
        auctionItemId: auctionId,
      },
      headers: {
        Token: `${token}`,
      },
    })
      .then((res) => {
        alert("삭제가 완료되었습니다");
        // 작업 완료 되면 페이지 이동(새로고침)
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response);
        alert("삭제가 어렵습니다!");
        window.location.replace(`/`);
      });
  };

  const getItems = useCallback(async () => {
    setLoad(true);

    await axios
      .get(`https://ddang3.link/api/auction-list/by-manager/?pageNum=${page}`, {
        headers: {
          Token: `${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.filteringItemsResponseList);
        setItem((prevState) => [
          ...prevState,
          ...res.data.filteringItemsResponseList,
        ]);
        setFound((prevState) => [
          ...prevState,
          ...res.data.filteringItemsResponseList,
        ]);
        setNext(res.data.hasNext);
      });
    setLoad(false);
  }, [page]);

  useEffect(() => {
    getItems();
  }, [getItems]);

  useEffect(() => {
    if (inView && !load && next === true) {
      setPage((page) => page + 1);
    }
  }, [inView, load, found]);

  return (
    <div class="content-body_wrap">
      {load ? (
        <div>waiting</div>
      ) : (
        <div class="my-detail">
          <ul class="my-detail_list">
            <p class="content-body-list-title">등록된 물품 목록</p>
            {found.map((item, idx) => (
              <React.Fragment key={idx}>
                {found.length - 1 === idx ? (
                  <li ref={ref} class="content-body-result-list">
                    <span className="content-body-result-list-time">
                      {item.auctionItemId}번
                    </span>
                    <span className="content-body-result-list-state">
                      {item.auctionItemName}
                    </span>
                    <button
                      style={{ borderRadius: "20px" }}
                      class="content-body-result-list-btn-ongoing"
                    >
                      상세보기
                    </button>
                  </li>
                ) : (
                  <li class="content-body-result-list">
                    <span className="content-body-result-list-time">
                      {item.auctionItemId}번
                    </span>
                    <span className="content-body-result-list-state">
                      {item.auctionItemName}
                    </span>
                    <button
                      style={{ borderRadius: "20px" }}
                      class="content-body-result-list-btn-ongoing"
                      onClick={() => onClickDetail(item.auctionItemId)}
                    >
                      상세보기
                    </button>
                    <button
                      style={{ borderRadius: "20px", width: "40px" }}
                      class="match-status isHurry"
                      onClick={() => onClickDelete(item.auctionItemId)}
                    >
                      삭제
                    </button>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AuctionManagerRegistList;
