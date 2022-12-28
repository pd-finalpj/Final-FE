import "../../style/css/main.css";
import "../../style/css/Slide.css";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import "./Day.css";
const Day = ({ isClick, setClicked }) => {
  const onclickhandler = (date) => {
    setClicked(date);
  };
  const Container = styled.div`
    width: 120px;
    height: 40px;
  `;
  var currentDay = new Date();
  var theYear = currentDay.getFullYear();
  var theMonth = currentDay.getMonth();
  var theDate = currentDay.getDate();
  var theDayOfWeek = currentDay.getDay();
  var thisWeek = [];
  for (var i = 0; i < 7; i++) {
    var resultDay = new Date(theYear, theMonth, theDate + (i + theDayOfWeek));
    var mm = Number(resultDay.getMonth()) + 1;
    var dd = resultDay.getDate();
    mm = String(mm).length === 1 ? "0" + mm : mm;
    dd = String(dd).length === 1 ? "0" + dd : dd;
    thisWeek[i] = mm + "-" + dd;
  }
  console.log(thisWeek);
  return (
    <div id="dateNav" class="sub-header" style={{ padding_bottom: "10px;" }}>
      <div class="tabWrap">
        <div class="swipe-tabs">
          <ul class="swipe-tab slick-initialized slick-slider">
            <div className="swipe-tabs">
              {thisWeek &&
                thisWeek.map((date) => (
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