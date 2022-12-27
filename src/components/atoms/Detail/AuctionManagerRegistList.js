import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import axios from "../../../../node_modules/axios/index";
import { useNavigate } from "../../../../node_modules/react-router-dom/dist/index";
import './AuctionResultDetails.css';
import { useInView } from "react-intersection-observer";

const AuctionManagerRegistList = () => {
    const token = localStorage.getItem("access_token");

    const [item, setItem] = useState([]);
    const [page, setPage] = useState(1);
    const [load, setLoad] = useState(false);    
    // const [found, setFound] = useState([]);

    const [ref, inView] = useInView();

    const getItems = useCallback(async () => {
        setLoad(true);
        
        await axios
        .get(`http://3.34.237.17:8080/auction-list/by-manager/?pageNum=${page}`, {
            headers: {
                Token: `${token}`
            }
        })
        .then((res) => {
            console.log(res.date.filteringItemsResponseList);
            setItem((prevState) => [
                ...prevState,
                ...res.data.filteringItemsResponseList
            ]);
            // setFound((prevState) => [
            //     ...prevState,
            //     ...res.data.filteringItemsResponseList
            // ]);
        });
        setLoad(false);
    }, [page]);

    useEffect(() => {
        getItems();
      }, [getItems]);

    useEffect(() => {
        // 
        if (inView && !load) {
            setPage((page) => page + 1);
        }
    }, [inView, load]);

    const itemSet = 
        item.filteringItemsResponseList &&
        item.filteringItemsResponseList.map((index) => {
            <li key={index.auctionItemId} class="content-body-result-list">
                <span class="content-body-result-list-time">
                    마감일자{index.auctionEndDate}
                </span>
                <span class="content-body-result-list-state">
                    {index.auctionItemName}
                </span>
                <button class="content-body-result-list-btn">상세보기</button>
            </li>
        });

    return (
        <div class="content-body_wrap">
            <div class="my-detail">
                <ul class="my-detail_list">
                    <p class="content-body-list-title">등록한 매물 목록</p>
                    <li>{itemSet}</li>
                </ul>
            </div>
        </div>
    )
};

export default AuctionManagerRegistList;