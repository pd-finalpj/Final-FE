import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AuctionResultDetails.css";

const AuctionResultsDetails = () => {
  // 진행 중인 거는 아직 입찰 시작 안 한 것도 같이 넘어옴.succes, fail, undefined
  // undefined 시간 계산 처리 필요

  const [item, setItem] = useState([]);
  const [ing, setIng] = useState([]);
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    axios
      .get("http://ddang3.link/api/aft-bidding-list", {
        headers: {
          Token: `${token}`,
        },
      })
      .then((res) => {
        setItem(res.data);
        console.log(res.data);
      })
      .catch((res) => {
        console.log(res.error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://ddang3.link/api/bidding-list", {
        headers: {
          Token: `${token}`,
        },
      })
      .then((res) => {
        setIng(res.data);
        console.log(res.data);
      })
      .catch((res) => {
        console.log(res.error);
      });
  }, []);
  const itemset =
    item.aftBiddingDetailsResponseList &&
    item.aftBiddingDetailsResponseList.map((index) => (
      <li key={index.aftBiddingId} class="content-body-result-list">
        <span class="content-body-result-list-time">
          낙찰일자{index.biddingDate}
        </span>
        <span class="content-body-result-list-state">
          {index.auctionItemName}
        </span>
        <span class="content-body-result-list-state">
          낙찰 금액:{index.amount}
        </span>
        <button class="content-body-result-list-btn-ongoing">
          낙찰 결과:{index.biddingResult}
        </button>
      </li>
    ));
  const ingset =
    ing.biddingDetailsResponseList &&
    ing.biddingDetailsResponseList.map((index) => (
      <li key={index.aftBiddingId} class="content-body-result-list">
        <span class="content-body-result-list-time">
          낙찰일자{index.biddingDate}
        </span>
        <span class="content-body-result-list-state">
          {index.auctionItemName}
        </span>
        <span class="content-body-result-list-state">가격:{index.amount}</span>
        <button class="content-body-result-list-btn-ongoing">진행중</button>
      </li>
    ));

  return (
    <div class="content-body_wrap">
      <div class="my-detail">
        <ul class="my-detail_list">
          <p class="content-body-list-title"> 경매 결과</p>
          <li>{itemset}</li>
        </ul>
        <br></br>
        <ul class="my-detail_list">
          <p class="content-body-list-title">진행 중인 경매 물품</p>
          {ingset}
        </ul>
        <br></br>
      </div>
    </div>
  );
};

export default AuctionResultsDetails;
