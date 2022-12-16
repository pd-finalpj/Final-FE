import "../../style/css/main.css";
import React, { useState } from "react";

const actionlist = () => {
  const listItem = [
    {
      addressCode: "string",
      addressDetail: "string",
      appraisedValue: 0,
      areaSize: 0,
      auctionEndDate: "2022-12-15T09:36:57.942Z",
      auctionFailedCount: 0,
      auctionItemCaseNumber: "string",
      auctionItemI: 0,
      auctionItemName: "우리집",
      auctionStartDate: "2022-12-15T09:36:57.942Z",
      bookmarkCount: 0,
      hit: 133,
      itemCategory: "아파트",
      itemSoldState: "FAIL",
      location: "충북 청주시 청원구 율량독 럭키아파트",
      lotNumber: "string",
      managerId: "string",
      state: true,
    },
  ];

  const ListMap = listItem.map((listItem) => (
    <li class="list--match-schedule--item">
      <div class="list--match-schedule--item a">
        <div clwass="list--match-schedule__time">
          <p>{listItem.auctionStartDate.substring(11, 16)}</p>
        </div>
        <div class="list--match-schedule__info">
          <p class="match--label early-bird">담당부서:</p>
          <div class="match-list__title">
            <h3>{listItem.auctionItemName}</h3>
          </div>
          <div class="label--match-option">
            <span class="match--option isMix">{listItem.location}</span>
            <span>주거형태:{listItem.itemCategory}</span>{" "}
          </div>
        </div>
        <div class="list--match-schedule__status">
          <div class="match-status isOpen">
            <div>
              <div class="list--match-schedule__status"></div>
            </div>
          </div>
        </div>
      </div>
    </li>
  ));

  return <div style={{ width: "  70%", margin: "0 auto" }}>{ListMap}</div>;
};
export default actionlist;
