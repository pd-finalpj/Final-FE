import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "../../node_modules/axios/index";

const Containner = styled.ul`
  width: "  70%";
  margin: "0 auto";
`;

const Bookmark = () => {
  const token = localStorage.getItem("access_token");
  const [item, setItem] = useState([]);
  const [load, setLoad] = useState(false);
  const bookmark = item.bookmarkDetailsResponseList;
  var state = useState(0);
  const Enddata = item.bookmarkDetailsResponseListauctionEndDate;
  const diff = new Date(Enddata).getTime() - new Date().getTime();

  const deadline = diff / 1000 / 60 / 60;
  // alert(deadline);

  if (deadline >= 15) {
    // setdeadbtn(1)
    state = 1;
  } else if (deadline > 0 && deadline < 15) {
    //  setdeadbtn(2)33
    state = 2;
  } else {
    // setdeadbtn(0)
    state = 0;
  }
  const delbookmark = () => {
    const token = localStorage.getItem("access_token");
    axios({
      method: "Delete",
      url: `http://3.34.237.17:8080/bookmark/${bookmark.auctionId}`,
      data: {
        auctionItemId: item.auctionId,
      },
      headers: {
        Token: `${token}`,
      },
    })
      .then((res) => {
        alert("삭제가 완료되었습니다");
        // 작업 완료 되면 페이지 이동(새로고침)
        window.location.replace(`/`);
      })
      .catch((error) => {
        console.log(error.response);
        alert("삭제가 어렵습니다!");
        window.location.replace(`/`);
      });
  };

  useEffect(() => {
    axios
      .get(`http:///3.34.237.17:8080/bookmark-list`, {
        headers: {
          Token: `${token}`,
        },
      })
      .then(function (response) {
        setLoad(false);
        // 성공 핸들링
        setItem(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
        setLoad(true);
      })
      .then(function () {
        // 항상 실행되는 영역
      });
  }, []);
  return (
    <div class="fadein">
      <div className="content-back">
        <div class="content-wrap">
          <form id="search-form" action="./" method="get">
            <div class="window-pop-product-view product-view">
              <div class="product-view-register">
                <div
                  class="view-data square-shadow-box"
                  style={{ height: "80em" }}
                >
                  <div class="default-view-content">
                    <div class="view-top-category-wrap">
                      <div class="view-top-category-table">
                        <div class="view-top-category-inner">
                          <div class="view-top-category-list">
                            <h3>관심있는 경매 물품</h3>
                            <div style={{ width: "100%" }}>
                              <Containner>
                                {load ? (
                                  <div>기다림</div>
                                ) : (
                                  bookmark &&
                                  bookmark.map((bookmark) => (
                                    <div>
                                      <button
                                        class="match-status isHurry"
                                        style={{
                                          width: "10%",
                                          display: "block",
                                          height: "40px",
                                        }}
                                        onClick={delbookmark}
                                      >
                                        삭제
                                      </button>
                                      <Link
                                        to={`/Detail/${bookmark.auctionItemId}`}
                                      >
                                        <li
                                          class="list--match-schedule--item"
                                          style={{
                                            width: "80%",
                                            margin: "0 auto",
                                          }}
                                        >
                                          <div
                                            class="list--match-schedule--item a"
                                            key={bookmark.auctionItemId}
                                            bookmark={bookmark}
                                          >
                                            <div clwass="list--match-schedule__time">
                                              <p>
                                                {bookmark.auctionEndDate.substring(
                                                  11,
                                                  16
                                                )}
                                              </p>
                                            </div>

                                            <div class="list--match-schedule__info">
                                              <p class="match--label early-bird">
                                                담당부서:
                                              </p>
                                              <div class="match-list__title">
                                                <h3>
                                                  {bookmark.auctionItemName}
                                                </h3>
                                              </div>
                                              <div class="label--match-option">
                                                <span class="match--option isMix">
                                                  {bookmark.location}
                                                </span>
                                                <span>
                                                  주거형태:
                                                  {bookmark.itemCategory}
                                                </span>
                                                <span>
                                                  평수:{bookmark.areaSize}
                                                </span>
                                              </div>
                                            </div>

                                            <div class="list--match-schedule__status">
                                              <div>
                                                {state === 1 ? (
                                                  <div class="match-status isOpen">
                                                    <p>신청가능</p>
                                                  </div>
                                                ) : state === 2 ? (
                                                  <div class="match-status isHurry">
                                                    <p>마감임박!</p>
                                                  </div>
                                                ) : state === 0 ? (
                                                  <div class="match-status isFull">
                                                    <p>마감</p>
                                                  </div>
                                                ) : (
                                                  <div
                                                    class="match-status isFull"
                                                    style={{ height: "15px" }}
                                                  >
                                                    <p>마감</p>
                                                  </div>
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                      </Link>
                                    </div>
                                  ))
                                )}
                              </Containner>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="view-content-wrap">
                    <input
                      id="auction_id"
                      type="hidden"
                      value="503_20210000571_001"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
