import React, { useState } from "react";
import "../../style/css/register.css";
import { AddImage } from "../AddImg/AddImage";
import AddImg from "../AddImg/AddImage";
import styled from "styled-components";

const CreateListDiv = styled.div`
  padding: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const registers = () => {
  // const [countList, setCountList] = useState([0]);

  // const onAddDetailDiv = () => {
  //   let countArr = [...countList];
  //   let counter = countArr.slice(-1)[0];
  //   counter += 1;
  //   countArr.push(counter); // index 사용 X
  //   // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용
  //   setCountList(countArr);
  // };

  return (
    <div className="content-back">
      <div class="content-wrap">
        <form id="search-form" action="./" method="get">
          <div class="window-pop-product-view product-view">
            <div class="product-view-register">
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
                        <AddImage />
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
                                  <strong>물건종류</strong>
                                </th>
                                <td class="text-align-left">
                                  <input
                                    className="casenb"
                                    placeholder="입력하세요"
                                  ></input>
                                </td>
                                <th>
                                  <strong>사건접수</strong>
                                </th>
                                <td class="text-align-left">
                                  <input
                                    className="casenb"
                                    placeholder="입력하세요"
                                  ></input>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <strong>건물면적</strong>
                                </th>
                                <td class="text-align-left">
                                  <input
                                    className="casenb"
                                    placeholder="입력하세요"
                                  ></input>
                                </td>
                                <th>
                                  <strong>감정가</strong>
                                </th>
                                <td class="text-align-right">
                                  <strong class="color-black">
                                    <input
                                      className="casenb"
                                      placeholder="입력하세요"
                                    ></input>
                                  </strong>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <strong>대지권</strong>
                                </th>
                                <td class="text-align-left">
                                  <input
                                    className="casenb"
                                    placeholder="입력하세요"
                                  ></input>
                                </td>
                                <th>
                                  <strong>경매구분</strong>
                                </th>
                                <td class="text-align-left">
                                  <input
                                    className="casenb"
                                    placeholder="입력하세요"
                                  ></input>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <strong>매각물건</strong>
                                </th>
                                <td class="text-align-center">
                                  <input
                                    className="casenb"
                                    placeholder="입력하세요"
                                  ></input>
                                  <strong className="color-black"></strong>
                                </td>
                                <th>
                                  <strong>입찰보증금</strong>
                                </th>
                                <td class="text-align-right">
                                  <strong class="color-black">
                                    <input
                                      className="casenb"
                                      placeholder="입력하세요"
                                    ></input>
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
                              <td>
                                <input
                                  className="casenb"
                                  placeholder="입력하세요"
                                ></input>
                              </td>
                              <td>
                                <input
                                  className="casenb"
                                  placeholder="입력하세요"
                                ></input>
                              </td>
                              <td class="text-align-right">
                                <input
                                  className="casenb"
                                  placeholder="입력하세요"
                                ></input>
                              </td>
                              <td>
                                <input
                                  className="casenb"
                                  placeholder="입력하세요"
                                ></input>
                              </td>
                            </tr>
                            <tr>
                              <button className="backauction">+</button>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div>
                      <div class="content-right-body__wrap--sticky">
                        <div class="section-pc">
                          <div class="matchTime">
                            <p>시작:</p>
                            <p>종료:</p>
                          </div>

                          <div class="matchPlace">
                            <h1 class="txtH w700h">
                              <a href="/stadium/38/matches/">건물명 </a>
                            </h1>
                            <br></br>
                            <div class="wtgTool">
                              <input
                                className="address"
                                style={{ width: "100%" }}
                                placeholder="주소를 입력하세요"
                              ></input>
                              <input
                                className="address"
                                style={{ width: "100%" }}
                                placeholder="주소를 입력하세요"
                              ></input>
                            </div>
                            <br></br>
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
                              <div class="btnWrap">
                                <button
                                  type="button"
                                  class="btn money"
                                  // onClick={onAddDetailDiv}
                                >
                                  <p className="money-btn">
                                    <h3>등록하기</h3>
                                  </p>
                                </button>
                              </div>
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
export default registers;
