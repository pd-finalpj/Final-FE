import React from "react";
import AuctionRegistList from "../components/atoms/Detail/AuctionRegistList";
import AuctionResultDetailImg from "../components/atoms/Detail/AuctionResultDetailImg";

import '../components/atoms/Mypage/MyPage.css'

const AuctionRegistResult = () => {
    return (
        <div className='content_body content_body__double'>
            <AuctionResultDetailImg />
            <AuctionRegistList />
        </div>
    )
}

export default AuctionRegistResult;