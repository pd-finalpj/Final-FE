import React, { useState } from "react";
import "../../style/css/register.css";
import { AddImage } from "../AddImg/AddImage";
import AddImg from "../AddImg/AddImage";
import styled from "styled-components";
import axios from "../../../../node_modules/axios/index";
import { useCallback } from "react";

const CreateListDiv = styled.div`
  padding: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Registers = (props) => {

  const token = localStorage.getItem("access_token");
  const [itemCategory, setItemCategory] = useState("");
  const [auctionItemCaseNumber, setAuctionItemCaseNumber] = useState("");
  const [areaSize, setAreaSize] = useState();
  const [appraisedValue, setAppraisedValue] = useState();
  const [auctionStartDate, setAuctionStartDate] = useState("");
  const [auctionEndDate, setAuctionEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [addressCode, setAddressCode] = useState("");
  const [auctionItemName, setAuctionItemName] = useState("");
  const [lotNumber, setLotNumber] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [address, setAddress] = useState("");
  // imagefile state 선언
  // 자식 요소에서 props로 넘기기
  const [imageFiles, setImageFiles] = useState([]);
  const getImageFile = (elements) => {
    setImageFiles(elements);
  };
  
  // for address components
  const addressDetailSeperator = (() => {
    
    const addressDetailComponents = address.split(' ');
    const regexp = /동$/;
    const regexp2 = /[0-9]/;
    
    for (let i = 0; i < addressDetailComponents.length; i++) {
      
      if (regexp.exec(addressDetailComponents[i]) != null) {
        setLocation(addressDetailComponents[i]);
      }
      
      if (regexp2.test(addressDetailComponents[i])) {
        setLotNumber(addressDetailComponents[i]);
      }
      
    }
  });
  
  const onClickRegist = () => {

    addressDetailSeperator();

    axios({
      method: "post",
      url: "http://3.34.237.17:8080/auction",
      headers: {
        Token: `${token}`,
      },
      data: {
        addressCode: addressCode,
        auctionItemCaseNumber: auctionItemCaseNumber,
        auctionItemName: auctionItemName,
        location: location,
        lotNumber: lotNumber,
        addressDetail: addressDetail,
        appraisedValue: appraisedValue,
        auctionStartDate: auctionStartDate,
        auctionEndDate: auctionEndDate,
        itemCategory: itemCategory,
        areaSize: areaSize,
        imageUrlList: imageFiles
      }
    })
    .then((res) => {
      console.log(res.data.auctionItemId);
    })
  }

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
                          </div>
                          <div class="list-cell">이미지를 추가하세요.</div>
                        </div>
                      </div>
                      <div className="content-wrap">
                        <AddImage getImageFile={getImageFile} imageFiles={imageFiles}/>
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
                                <td 
                                //class="text-align-left"
                                >
                                  <select value={itemCategory}
                                  style = {{height: "30px", lineHeight: "20px"}}
                                  onChange={(e) => 
                                  setItemCategory(e.target.value)}>
                                    <option value="HOUSE">단독주택</option>
                                    <option value="APARTMENT">아파트</option>
                                    <option value="VILLA">빌라</option>
                                  </select>
                                </td>
                                <th>
                                  <strong>사건번호</strong>
                                </th>
                                <td class="text-align-left">
                                  <input
                                    type="text"
                                    name="auctionItemCaseNumber"
                                    value={auctionItemCaseNumber}
                                    className="casenb"
                                    placeholder="입력하세요"
                                    onChange={(e) => {
                                      setAuctionItemCaseNumber(e.target.value);
                                    }}
                                  ></input>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <strong>건물면적</strong>
                                </th>
                                <td class="text-align-left">
                                  <input
                                    type="text"
                                    name="areaSize"
                                    value={areaSize}
                                    className="casenb"
                                    placeholder="입력하세요"
                                    onChange={(e) => {
                                      setAreaSize(parseFloat(e.target.value));
                                    }}
                                  ></input>
                                </td>
                                <th>
                                  <strong>감정가</strong>
                                </th>
                                <td class="text-align-right">
                                  <strong class="color-black">
                                    <input
                                      type="text"
                                      name="appraisedValue"
                                      value={appraisedValue}
                                      className="casenb"
                                      placeholder="입력하세요"
                                      onChange={(e) => {
                                        setAppraisedValue(parseFloat(e.target.value));
                                      }}
                                    ></input>
                                  </strong>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <strong>매각물건</strong>
                                </th>
                                <td class="text-align-center">
                                  <input
                                    type="text"
                                    name="auctionItemName"
                                    className="casenb"
                                    placeholder="입력하세요"
                                    onChange={(e) => {
                                      setAuctionItemName(e.target.value);
                                    }}
                                  ></input>
                                  <strong className="color-black"></strong>
                                </td>
                                <th>
                                  <strong>입찰보증금</strong>
                                </th>
                                <td class="text-align-right">
                                  <strong class="color-black">
                                    <span className="casenb">10%</span>
                                  </strong>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <strong>주소코드</strong>
                                </th>
                                <td class="text-align-center">
                                  <input
                                    type="text"
                                    name="addressCode"
                                    className="casenb"
                                    placeholder="입력하세요"
                                    onChange={(e) => {
                                      setAddressCode(e.target.value);
                                    }}
                                  ></input>
                                  <strong className="color-black"></strong>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/* <div class="print-area-content" data-print-value="2">
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
                      </div> */}
                    </div>
                    <div>
                      <div class="content-right-body__wrap--sticky">
                        <div class="section-pc">
                          <div class="matchTime">
                            <p>시작: <input type="datetime-local" value={auctionStartDate} onChange={(e) => {setAuctionStartDate(e.target.value)}}></input></p>
                            <p>종료: <input type="datetime-local" value={auctionEndDate} onChange={(e) => {setAuctionEndDate(e.target.value)}}></input></p>
                          </div>

                          <div class="matchPlace">
                            <h1 class="txtH w700h">
                              <a href="/stadium/38/matches/">건물명 </a>
                            </h1>
                            <br></br>
                            <div class="wtgTool">
                              <input
                                type="text"
                                value={address}
                                className="address"
                                style={{ width: "100%" }}
                                placeholder="지번주소를 입력하세요"
                                onChange={(e) => {
                                  setAddress(e.target.value);
                                }}
                              ></input>
                              <input
                                type="text"
                                value={addressDetail}
                                className="address"
                                style={{ width: "100%" }}
                                placeholder="상세주소를 입력하세요"
                                onChange={(e) => {
                                  setAddressDetail(e.target.value);
                                }}
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
                                  onClick={onClickRegist}
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
export default Registers;
