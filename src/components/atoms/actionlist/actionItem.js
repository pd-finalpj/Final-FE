import { useState } from "react";

const ActionItem = ({ filteringItemsResponseList }) => {
  const {
    areaSize,
    auctionItemName,
    auctionEndDate,
    itemCategory,
    location,
    managerName,
  } = filteringItemsResponseList;
  var state = useState(0);
  const Enddata = filteringItemsResponseList.auctionEndDate;
  const diff = new Date(Enddata).getTime() - new Date().getTime();

  const deadline = diff / 1000 / 60 / 60;
  // alert(deadline);

  if (deadline >= 15) {
    // setdeadbtn(1)
    state = 1;
  } else if (deadline > 0 && deadline < 15) {
    //  setdeadbtn(2)33
    state = 2;
  } else {
    // setdeadbtn(0)
    state = 0;
  }

  return (
    <li
      class="list--match-schedule--item"
      style={{ width: "70%", margin: "0 auto" }}
    >
      <div class="list--match-schedule--item a">
        <div clwass="list--match-schedule__time">
          <p>{auctionEndDate.substring(11, 16)}</p>
        </div>
        <div class="list--match-schedule__info">
          <p class="match--label early-bird">담당:{managerName}</p>
          <div class="match-list__title">
            <h3>{auctionItemName}</h3>
          </div>
          <div class="label--match-option">
            <span class="match--option isMix">{location}</span>
            <span>주거형태:{itemCategory}</span>
            <span>평수:{areaSize}</span>
          </div>
        </div>
        <div class="list--match-schedule__status">
          <div>
            {state === 1 ? (
              <div class="match-status isOpen">
                <p>신청가능</p>
              </div>
            ) : state === 2 ? (
              <div class="match-status isHurry">
                <p>마감임박!</p>
              </div>
            ) : state === 0 ? (
              <div class="match-status isFull">
                <p>마감</p>
              </div>
            ) : (
              <div class="match-status isFull">
                <p>마감</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
export default ActionItem;
