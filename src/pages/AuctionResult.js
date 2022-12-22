import React from "react";
import AuctionResultDetailImg from "../components/atoms/Detail/AuctionResultDetailImg";
import AuctionResultsDetails from "../components/atoms/Detail/AuctionResultDetails";
import '../components/atoms/Mypage/MyPage.css'

const AuctionResult = () => {
    return (
        <div className='content_body content_body__double'>
            <AuctionResultDetailImg />
            <AuctionResultsDetails />
        </div>
    )
}

export default AuctionResult;