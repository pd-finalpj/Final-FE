import "../../style/css/main.css";
import React, { useState, useEffect } from "react";

const Actionlist = () => {
  var state = useState(0);

  const diff=
    new Date("2022-12-17T21:36:57.942Z").getTime() - new Date().getTime();

  const deadline = diff / 1000 / 60 / 60;
  // alert(deadline);



    if(deadline >= 15){
      // setdeadbtn(1)
      state=1
    }else if(deadline>0&& deadline<15){
      //  setdeadbtn(2)
       state=2
    }else{
      // setdeadbtn(0)  
      state=0
    }
    console.log("현재 state:"+state)
    console.log("현재 diff:"+diff)
    console.log("현재 deadline:"+deadline)

 const ListItem = [
  {
    addressCode: "string",
    addressDetail: "string",
    appraisedValue: 0,
    areaSize: 0,
    auctionEndDate: "2022-12-17T21:36:57.942Z",
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

  const ListMap = ListItem.map((ListItem) => (
    <li class="list--match-schedule--item" key={ListItem.addressCode}>
      <div class="list--match-schedule--item a">
        <div clwass="list--match-schedule__time">
          <p>{ListItem.auctionStartDate.substring(11, 16)}</p>
        </div>
        <div class="list--match-schedule__info">
          <p class="match--label early-bird">담당부서:</p>
          <div class="match-list__title">
            <h3>{ListItem.auctionItemName}</h3>
          </div>
          <div class="label--match-option">
            <span class="match--option isMix">{ListItem.location}</span>
            <span>주거형태:{ListItem.itemCategory}</span>{" "}
          </div>
        </div>
              <div class="list--match-schedule__status">
               <div>
                  {state === 1 ? <div class="match-status isOpen"><p>신청가능</p></div>
                  :state === 2 ? <div class="match-status isHurry"><p>마감임박!</p></div>
                  :state === 0 ? <div class="match-status isFull"><p>마감</p></div>
                  :<div class="match-status isFull"><p>마감</p></div>
                  }
               </div>
        </div>
      </div>
    </li>
  ));

  return <ul style={{ width: "  70%", margin: "0 auto" }}>{ListMap}</ul>;
};
export default Actionlist;
