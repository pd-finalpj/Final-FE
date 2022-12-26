import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigate } from "../../../../node_modules/react-router-dom/dist/index";
import './AuctionResultDetails.css';

const AuctionResultsDetails = () => {
    
    // 진행 중인 거는 아직 입찰 시작 안 한 것도 같이 넘어옴.succes, fail, undefined
    // undefined 시간 계산 처리 필요
    const token = localStorage.getItem("access_token");
    const [aftbiddingDetails, setAftbiddingDetails] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios
        .get("http://3.34.237.17:8080/aft-bidding-list", {
            headers: {
                Token: `${token}`
            }
        })
        .then((res) => {
                console.log(res.data.aftBiddingDetailsResponseList);
                setAftbiddingDetails(res.data.aftBiddingDetailsResponseList);
        });
        
    }, []);

    const dateController = (decideDate) => {

        const millisec = new Date(decideDate).getTime() - new Date().getTime();
        const hour = millisec / 1000 / 60 / 60;
        const min = (hour - Math.floor(hour)) * 60;
        const sec = (min - Math.floor(min)) * 60;

        return Math.floor(hour) + ":" + Math.floor(min) + ":" + Math.floor(sec);
    };

    const onClickPageTransfer = (auctionItemId) => {
        navigate(`"/Detail/${auctionItemId}"`);
      };
        
    return (
            <div class="content-body_wrap">
                <div class="my-detail">
                    <ul class="my-detail_list">
                        <p class="content-body-list-title">성공한 경매 물품</p>
                        {aftbiddingDetails.map((result) =>
                            result["biddingResult"] === "SUCCESS" ? 
                                <li key={result} class="content-body-result-list">
                                    <span class="content-body-result-list-time">00:00:00</span>
                                    <span class="content-body-result-list-state">{result["auctionItemName"]}</span>
                                    <button class="content-body-result-list-btn-end" onClick={() => onClickPageTransfer(result["auctionItemId"])}>마감</button>
                                </li>  : null)}
                    </ul>
                    <br></br>
                    <ul class="my-detail_list">
                        <p class="content-body-list-title">진행 중인 경매 물품</p>
                        {aftbiddingDetails.map((result) =>
                            result["biddingResult"] === "UNDEFINED" ? 
                                <li key={result} class="content-body-result-list">
                                    <span class="content-body-result-list-time">{dateController(result["decideDate"])}</span>
                                    <span class="content-body-result-list-state">{result["auctionItemName"]}</span>
                                        <button class="content-body-result-list-btn-ongoing" onClick={() => onClickPageTransfer(result["auctionItemId"])}>마감 임박!</button>
                                </li>  : null)}
                    </ul>
                    <br></br>
                    <ul class="my-detail_list">
                        <p class="content-body-list-title">실패한 경매 물품</p>
                        {aftbiddingDetails.map((result) =>
                            result["biddingResult"] === "FAIL" ? 
                                <li key={result} class="content-body-result-list">
                                    <span class="content-body-result-list-time">00:00:00</span>
                                    <span class="content-body-result-list-state">{result["auctionItemName"]}</span>
                                        <button class="content-body-result-list-btn-end" onClick={() => onClickPageTransfer(result["auctionItemId"])}>마감</button>
                                </li>  : null)}
                    </ul>
                </div>
            </div>
    )
}

export default AuctionResultsDetails;