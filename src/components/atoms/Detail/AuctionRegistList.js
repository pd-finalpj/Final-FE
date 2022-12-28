import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../../../../node_modules/axios/index";
import { useNavigate } from "../../../../node_modules/react-router-dom/dist/index";
import './AuctionResultDetails.css';

const AuctionRegistList = () => {
    const [] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem("access_token");

    useEffect(() => {
        axios
        .get("http://ddang3.link/", {
            headers: {
                Token: `${token}`
            }
        })
        .then((res) => {

        })
    });

    return (
        <div class="content-body-wrap">
            <div class="my-detail">
                <ul class="my-detail-list">
                    <p class="content-body-list-title">등록한 매물 목록</p>
                    
                </ul>
            </div>
        </div>
    )
};

export default AuctionRegistList;