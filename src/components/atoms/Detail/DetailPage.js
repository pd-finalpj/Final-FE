import React, { useEffect, useState, useCallback } from "react";
import "../../style/css/Detail.css";
import DetailSlide from "../Slide/DetailSlide";
import Map from "../Map/Map";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Detail = (filteringItemsResponseList, Header) => {
  let urlaxios = useParams();
  const [datas, setDatas] = useState([]);
  const [load, setLoad] = useState(false);
  const [faild, setFaild] = useState([]);
  const [amount, setAmount] = useState("");
  const [auctionId, setauctionId] = useState(`${urlaxios.id}`);

  console.log(urlaxios.uderid);

  useEffect(() => {
    axios
      .get(`http:///3.34.237.17:8080/api/auction/${urlaxios.id}`)
      .then(function (response) {
        // 성공 핸들링
        console.log(response);
        setDatas(response.data);
        setauctionId(response.data.aftBiddingDetailsResponseList.auctionItemId);
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
    const fetchData = async () => {
      setLoad(true);
      try {
        const response = await axios.get(
          `http://3.34.237.17:8080/api/auction-failed-log/${urlaxios.id}`
        );
        console.log(response.data);
        setFaild(response.data.auctionFailedLogDetailsResponseList);
      } catch (e) {
        console.log(e);
      }
      setLoad(false);
    };
    fetchData();
  }, []);

  const onClickamount = () => {
    const token = localStorage.getItem("access_token");
    axios({
      method: "post",
      url: "http://3.34.237.17:8080/api/bidding",
      data: {
        amount: amount,
        auctionItemId: auctionId,
      },
      headers: {
        Token: `${token}`,
      },
    })
      .then((res) => {
        console.log(res);
        window.location.replace(`/`);
        alert("입찰이 안료되었습니다!");
        // 작업 완료 되면 페이지 이동(새로고침)
      })
      .catch((error) => console.log(error.response));
  };
  const onClickbookmark = () => {
    const token = localStorage.getItem("access_token");
    axios({
      method: "post",
      url: "http://3.34.237.17:8080/api/bookmark",
      data: {
        auctionId: auctionId,
      },
      headers: {
        Token: `${token}`,
      },
    })
      .then((res) => {
        window.location.replace(`/`);
        alert("북마크등록이 완료됬습니다!");
        // 작업 완료 되면 페이지 이동(새로고침)
      })
      .catch((error) => {
        console.log(error.response);
        alert("이미 등록되어있습니다!");
      });
  };
  const onChangeamount = useCallback((e) => {
    setAmount(e.target.value);
  }, []);

  return (
    <div className="content-back">
      <div class="content-wrap">
        <form id="search-form" action="./" method="get">
          <div class="window-pop-product-view product-view">
            <div class="product-view-detail">
              <div class="view-data square-shadow-box">
                <div class="default-view-content">
                  <div class="view-top-category-wrap">
                    <div class="view-top-category-table">
                      <div class="view-top-category-inner">
                        <div class="view-top-category-list">
                          <div class="list-cell color-nice-blue">
                            {datas.auctionItemCaseNumber}
                          </div>
                          <div class="list-cell">{datas.managerCourt}</div>
                          <div class="view-top-btn-group">
                            <div class="btn-group-cell">
                              <button
                                type="button"
                                class="btn-view-top-item btn-product-jjim btn-list-link not-login"
                                data-value="503_20210000571_001"
                                data-interest_id=""
                              >
                                <span class="txt" onClick={onClickbookmark}>
                                  찜하기
                                </span>
                              </button>
                            </div>
                            <div class="btn-group-cell">
                              <button
                                type="button"
                                class="btn-view-top-item btn-product-tip not-login"
                                data-toggle="modal"
                                data-target="#reportModal"
                              >
                                <span>
                                  <span class="icon icon-tip"></span>
                                  <span class="txt">제보</span>
                                </span>
                              </button>
                            </div>
                            <div class="btn-group-cell">
                              <button
                                type="button"
                                data-toggle="modal"
                                data-target="#errorModal"
                                class="btn-view-top-item btn-product-error not-login"
                              >
                                <span>
                                  <span class="icon icon-error"></span>
                                  <span class="txt">오류신고</span>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="view-top-category-info">
                          <div class="view-top-category-info-cell date">
                            <em>매각기일</em>2022-12-12(월) 10:00 (입찰 당일)
                          </div>
                          <div class="view-top-category-info-cell tel">
                            <h3>
                              담당자:
                              {datas.managerName}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="content-wrap">
                        <DetailSlide datas={datas.imageFileUrlResponseList} />
                      </div>
                    </div>
                  </div>

                  <div class="input-flex">
                    <div className="data-info-wrap" style={{ display: "flex" }}>
                      <div className="data-flex-box">
                        <div class="print-area-content" data-print-value="1">
                          <h3>경매 물품 정보</h3>
                          <div class="view-content-info">
                            <table class="table no-top-border">
                              <colgroup>
                                <col style={{ width: "85px" }} />
                                <col style={{ width: "auto" }} />
                                <col style={{ width: "85px" }} />
                                <col style={{ width: "auto" }} />
                                <col style={{ width: "85px" }} />
                                <col style={{ width: "auto" }} />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th>
                                    <strong>소재지</strong>
                                  </th>
                                  <td colspan="3" class="text-align-left">
                                    <strong>{datas.stateName}</strong>
                                    <a
                                      class="load-adress"
                                      href="http://www.juso.go.kr/support/AddressMainSearch.do?searchType=TOTAL&amp;searchKeyword=강원 강릉시 강동면 모전리 678-1"
                                    >
                                      도로명 주소:{datas.addressCode}도로명 검색
                                    </a>
                                  </td>
                                </tr>

                                <tr>
                                  <th>
                                    <strong>새주소</strong>
                                  </th>
                                  <td colspan="3" class="text-align-left">
                                    <strong>{datas.location}</strong>
                                  </td>
                                </tr>

                                <tr>
                                  <th>
                                    <strong>물건종류</strong>
                                  </th>
                                  <td class="text-align-left">
                                    {datas.itemCategory}
                                  </td>
                                  <th>
                                    <strong>사건접수</strong>
                                  </th>
                                  <td class="text-align-left">
                                    {" "}
                                    {datas.auctionItemCaseNumber}
                                  </td>
                                </tr>
                                <tr>
                                  <th>
                                    <strong>건물면적</strong>
                                  </th>
                                  <td class="text-align-left">
                                    {datas.areaSize}㎡
                                  </td>
                                  <th>
                                    <strong>감정가</strong>
                                  </th>
                                  <td class="text-align-right">
                                    <strong class="color-black">
                                      {datas.appraisedValue}
                                    </strong>
                                  </td>
                                </tr>
                                <tr>
                                  <th>
                                    <strong>감정가</strong>
                                  </th>
                                  <td class="text-align-left">10(%)</td>
                                  <th>
                                    <strong>건물 이름</strong>
                                  </th>
                                  <td class="text-align-left">
                                    {datas.auctionItemName}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div class="print-area-content" data-print-value="2">
                          <div class="view-content-title-group">
                            <h3 class="view-content-title">입찰 진행 내용</h3>
                          </div>
                          <table class="table auction-iiprogress">
                            <colgroup>
                              <col style={{ width: "70px" }} />
                              <col style={{ width: "auto" }} />
                              <col style={{ width: "auto" }} />
                              <col style={{ width: "67px" }} />
                            </colgroup>
                            <thead>
                              <tr>
                                <th>구분</th>
                                <th>입찰기일</th>
                                <th>최저매각가격</th>
                                <th>상태</th>
                              </tr>
                            </thead>
                            <tbody>
                              {faild &&
                                faild.map(
                                  (
                                    auctionFailedLogDetailsResponseList,
                                    idx
                                  ) => (
                                    <tr
                                      class="point"
                                      key={
                                        auctionFailedLogDetailsResponseList.auctionItemId
                                      }
                                      auctionFailedLogDetailsResponseList={
                                        auctionFailedLogDetailsResponseList
                                      }
                                    >
                                      <td>{idx}차</td>
                                      <td>
                                        {
                                          auctionFailedLogDetailsResponseList.auctionEndDate
                                        }
                                      </td>
                                      <td class="text-align-right">
                                        {
                                          auctionFailedLogDetailsResponseList.appraisedValue
                                        }
                                        :원
                                      </td>
                                    </tr>
                                  )
                                )}
                            </tbody>
                          </table>
                        </div>
                        <div
                          className="print-area-content"
                          data-print-value="3"
                        >
                          <div>
                            <h3>지도</h3>
                            <div>
                              <Map datas={datas} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="content-right-body__wrap--sticky">
                          <div class="section-pc">
                            <div class="matchTime">
                              <p>
                                시작
                                {datas.auctionStartDate}
                              </p>
                              <p>종료{datas.auctionEndDate}</p>
                            </div>
                            <div class="matchPlace">
                              <h1 class="txtH w700h">
                                <a href="/stadium/38/matches/">
                                  {datas.addressDetail}{" "}
                                </a>
                              </h1>
                              <div class="wtgTool">
                                <p class="txt1">
                                  {datas.location}+{datas.addressDetail}
                                </p>
                                <p
                                  id="copy-url1"
                                  class="txt1"
                                  style={{ text_decoration: "underline" }}
                                >
                                  주소 복사
                                </p>
                              </div>
                            </div>
                            <div class="match-info__fee">
                              <div class="matchFee">
                                <div>
                                  <span class="matchFee__money">
                                    <input
                                      style={{ width: "100%" }}
                                      placeholder="입찰가를 입력해주세요!!"
                                      value={amount}
                                      type="number"
                                      onChange={onChangeamount}
                                    ></input>
                                  </span>
                                </div>
                                <div class="btnWrap">
                                  <button
                                    type="button"
                                    class="btn money"
                                    onClick={onClickamount}
                                  >
                                    <p className="money-btn">
                                      <h3>입찰하기</h3>
                                    </p>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="match-apply__wrap">
                            <Link to="/Topic">
                              <div class="match-apply__bar match-apply__bar-green">
                                ✨ 공지사항을 확인해보세요!
                              </div>
                            </Link>
                            <div class="match-apply__button">
                              <div style={{ margin_right: "18px" }}>
                                <img
                                  src="https://plab-football.s3.amazonaws.com/static/img/ic_bookmark.svg"
                                  alt="img"
                                />
                              </div>{" "}
                              <div>
                                <p class="match-apply__button-text">
                                  현재
                                  <font
                                    style={{
                                      color: "#FEB700",
                                      font_weight: "700",
                                    }}
                                  >
                                    {datas.hit}
                                  </font>
                                  <br />
                                  이물건에 관심을 보이셧어요!
                                </p>
                              </div>
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
          </div>
        </form>
      </div>
    </div>
  );
};
export default Detail;
