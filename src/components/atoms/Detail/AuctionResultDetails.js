import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './AuctionResultDetails.css';

const AuctionResultsDetails = () => {
    
    // 진행 중인 거는 아직 입찰 시작 안 한 것도 같이 넘어옴.succes, fail, undefined
    // undefined 시간 계산 처리 필요

    const [aftbiddingDetails, setAftbiddingDetails] = useState([]);
    const navigate = useNavigate();    
    
    useEffect(() => {
        axios
        .get(
            "http://3.34.237.17:8080/aft-bidding-list"
            )
            .then((res) => {
                if (res.data.success) {
                    console.log(res.data);
                    setAftbiddingDetails(res.data);
                } else {
                    alert("경매 참여 기록을 불러오는데 실패했습니다.")
                }
            });
        }, []);

        const onClickDetails = (auctionId) => {
            navigate(`"/Detail/${auctionId}"`)
        }
        
    return (
            <div class="content-body_wrap">
                <div class="my-detail">
                    <ul class="my-detail_list">
                        <p class="content-body-list-title">성공한 경매 물품</p>
                        {aftbiddingDetails.map((result) =>
                            result[7] === "SUCCESS" ? 
                                <li key={result} class="content-body-result-list">
                                    <span class="content-body-result-list-time">00:00:00</span>
                                    <span class="content-body-result-list-state">state</span>
                                    <button class="content-body-result-list-btn-end">마감</button>
                                </li>  : null)}
                    </ul>
                    <br></br>
                    <ul class="my-detail_list">
                        <p class="content-body-list-title">진행 중인 경매 물품</p>
                        {aftbiddingDetails.map((result) =>
                            result[7] === "UNDEFINED" ? 
                                <li key={result} class="content-body-result-list">
                                    <span class="content-body-result-list-time">{result[0]}</span>
                                    <span class="content-body-result-list-state">state</span>
                                    <button class="content-body-result-list-btn-ongoing" onClick={() => onClickDetails(result[2])}>마감 임박!</button>
                                </li>  : null)}
                    </ul>
                    <br></br>
                    <ul class="my-detail_list">
                        <p class="content-body-list-title">실패한 경매 물품</p>
                        {aftbiddingDetails.map((result) =>
                            result[7] === "FAIL" ? 
                                <li key={result} class="content-body-result-list">
                                    <span class="content-body-result-list-time">00:00:00</span>
                                    <span class="content-body-result-list-state">{result[1]}</span>
                                    <button disabled={true} class="content-body-result-list-btn-end">마감</button>
                                </li>  : null)}
                    </ul>
                </div>
            </div>
    )
}

export default AuctionResultsDetails;