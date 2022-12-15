import "../../style/css/main.css";
import "../../style/css/Slide.css";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import "./Day.css";

const Day = () => {
  const [isClick, setClicked] = useState();

  const onclickhandler = (date) => {
    setClicked(date);
  };

  const Container = styled.div`
    width: 120px;
    height: 40px;
  `;

  let now = new Date();
  var todayDate = now.getDate(); //일
  const Dates = [
    todayDate,
    todayDate + 1,
    todayDate + 2,
    todayDate + 3,
    todayDate + 4,
    todayDate + 5,
    todayDate + 6,
  ];


  return (
    <div id="dateNav" class="sub-header" style={{ padding_bottom: "10px;" }}>
      <div class="tabWrap">
        <div class="swipe-tabs">
          <ul class="swipe-tab slick-initialized slick-slider">
            <div className="swipe-tabs">
              {Dates.map((date) => (
                <div className="dateWrap slick-slide">
                  <Container
                    value={date}
                    className={"day" + (date === isClick ? "click" : "")}
                    onClick={() => {
                      onclickhandler(date);
                    }}
                  >
                    {date}
                  </Container>
                </div>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Day;

