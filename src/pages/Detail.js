import React, { useEffect } from "react";
import "../components/style/css/Detail.css";
import Slide from "../components/atoms/Slide/Slide";
import Map from "../components/atoms/Map/Map";

import axios from "axios";

// import Comment from"../components/atoms/Comment/Comment"
import { useParams } from "react-router-dom";

const Detail = () => {
  const { dataId } = useParams();

  useEffect(() => {
    axios
      .get(
        ` "http://3.34.237.17:8080/auction/get/list"?id=${dataId}&type=single`
      )
      .then((response) => {
        if (response.data.success) {
          console.log(response.data);
        } else {
          alert("상세 정보 가져오기를 실패했습니다.");
        }
      });
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
                            2021 타경 571
                          </div>
                          <div class="list-cell">춘천지방법원 강릉3계</div>
                          <div class="view-top-btn-group">
                            <div class="btn-group-cell">
                              <button
                                type="button"
                                class="btn-view-top-item btn-product-jjim btn-list-link not-login"
                                data-value="503_20210000571_001"
                                data-interest_id=""
                              >
                                <span>
                                  <span class="icon icon-jjim"></span>
                                  <span class="txt">찜하기</span>
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
                            <em>담당계</em>(033) 640-1133
                          </div>
                        </div>
                      </div>
                      <div className="content-wrap">
                        <Slide />
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "block" }}>
                    <div class="view-memo-input hide">
                      <textarea
                        id="userMemo"
                        rows="2"
                        class="form-control"
                        placeholder="해당 물건에 대한 메모를 입력해 주세요."
                      ></textarea>
                      <input type="hidden" id="memoId" value="" />
                      <div class="btns">
                        <button
                          type="button"
                          class="btn btn-sm btn-dark-grey memo-update"
                        >
                          <span>저장</span>
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-charcoal-grey memo-toggle memo-cancel"
                        >
                          <span>취소</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="input-flex">
                    <div className="data-info-wrap">
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
                                  <strong>
                                    강원 강릉시 강동면 모전리 678-1 외 4개 목록
                                  </strong>
                                  <a
                                    class="load-adress"
                                    href="http://www.juso.go.kr/support/AddressMainSearch.do?searchType=TOTAL&amp;searchKeyword=강원 강릉시 강동면 모전리 678-1"
                                  >
                                    도로명 검색
                                  </a>
                                </td>
                              </tr>

                              <tr>
                                <th>
                                  <strong>새주소</strong>
                                </th>
                                <td colspan="3" class="text-align-left">
                                  <strong>경기도 수원시 삼덕로 76</strong>
                                </td>
                              </tr>

                              <tr>
                                <th>
                                  <strong>물건종류</strong>
                                </th>
                                <td class="text-align-left">전 </td>
                                <th>
                                  <strong>사건접수</strong>
                                </th>
                                <td class="text-align-left">2021.04.06</td>
                              </tr>
                              <tr>
                                <th>
                                  <strong>건물면적</strong>
                                </th>
                                <td class="text-align-left">0㎡</td>
                                <th>
                                  <strong>감정가</strong>
                                </th>
                                <td class="text-align-right">
                                  <strong class="color-black">
                                    357,315,000원
                                  </strong>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <strong>대지권</strong>
                                </th>
                                <td class="text-align-left">
                                  8285㎡ (2506.21평)
                                </td>
                                <th>
                                  <strong>경매구분</strong>
                                </th>
                                <td class="text-align-left">임의경매</td>
                              </tr>
                              <tr>
                                <th>
                                  <strong>매각물건</strong>
                                </th>
                                <td class="text-align-center">
                                  <strong className="color-black">집</strong>
                                </td>
                                <th>
                                  <strong>입찰보증금</strong>
                                </th>
                                <td class="text-align-right">
                                  <strong class="color-black">
                                    (10%) 35,731,500원
                                  </strong>
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
                            <tr class="point">
                              <td>1차</td>
                              <td>2022-12-12</td>
                              <td class="text-align-right">357,315,000</td>
                              <td></td>
                            </tr>
                            <tr class="point">
                              <td>1차</td>
                              <td>2022-12-12</td>
                              <td class="text-align-right">357,315,000</td>
                              <td></td>
                            </tr>
                            <tr class="point">
                              <td>1차</td>
                              <td>2022-12-12</td>
                              <td class="text-align-right">357,315,000</td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="print-area-content" data-print-value="3">
                        <div>
                          <h3>지도</h3>
                          <div>
                            <Map />
                          </div>
                        </div>
                      </div>
                      <div className="print-area-content" data-print-value="3">
                        <div>
                          <h3>댓글</h3>
                          <div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="content-right-body__wrap--sticky">
                        <div class="section-pc">
                          <div class="matchTime">
                            <p>시작:12월 12일 월요일 17:00</p>
                            <p>종료:12월 12일 월요알 19:00</p>
                          </div>
                          <div class="matchPlace">
                            <h1 class="txtH w700h">
                              <a href="/stadium/38/matches/">
                                피치 부천(이마트 중동점){" "}
                              </a>
                            </h1>
                            <div class="wtgTool">
                              <p class="txt1">경기 부천시 석천로 188</p>
                              <p
                                id="copy-url1"
                                class="txt1"
                                style={{ text_decoration: "underline" }}
                              >
                                주소 복사
                              </p>
                              <p
                                id="toggleMap"
                                onclick="showmap()"
                                class="txt1"
                                style={{ text_decoration: "underline" }}
                              >
                                지도 보기
                              </p>
                            </div>
                            <div style={{ margin_top: "10px" }}>
                              <span class="match-data">
                                <img
                                  src="https://plab-football.s3.amazonaws.com/static/img/ic_viewer.svg"
                                  alt="img"
                                />
                                104
                              </span>
                            </div>
                          </div>
                          <div class="match-info__fee">
                            <div class="matchFee">
                              <div>
                                <span class="matchFee__money">
                                  <input
                                    style={{ width: "100%" }}
                                    placeholder="입찰가를 입력해주세요!!"
                                  ></input>
                                </span>
                              </div>
                              <div class="btnWrap">
                                <button type="button" class="btn money">
                                  <p className="money-btn">
                                    <h3>입찰하기</h3>
                                  </p>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="match-apply__wrap">
                          <div class="match-apply__bar match-apply__bar-green">
                            ✨ 공지사항을 확인해보세요!
                          </div>
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
                                  ???분이
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
        </form>
      </div>
    </div>
  );
};
export default Detail;
