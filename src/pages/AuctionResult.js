import React from "react";

import AuctionResultsDetails from "../components/atoms/Detail/AuctionResultDetails";
import "../components/atoms/Mypage/MyPage.css";

const AuctionResult = () => {
  return (
    <div className="content_body content_body__double">
      <AuctionResultsDetails />
    </div>
  );
};

export default AuctionResult;
