import "../../style/css/main.css";
import "../../style/css/Slide.css";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Day = () => {
  const Button = styled.button`
    display: flex;
    cursor: pointer;
    align-items: center;
    position: absolute;
    justify-content: center;
    border: none;
    font-size: 12px;
    height: 50px;
    border-radius: 60px;
    padding: 25px 10px;
    opacity: 0.5;
    z-index: 2;
    i {
      color: rgba(0, 0, 0, 0.5);
    }
    width: 30px;
  `;
  const LeftButton = styled(Button)`
    transition: all 0.5s ease-in-out;
  `;

  const RightButton = styled(Button)`
    transition: all 0.5s ease-in-out;
  `;
  const Container = styled.div`
    background-color: rgba(0, 0, 0, 1);
    border-radius: 7px;
    display: flex;
    align-items: center;
    margin: 0 12.5px;
    cursor: pointer;
    position: relativ e;
  `;

  let now = new Date();
  let todayDate = now.getDate(); //일
  const day = ["일", "월", "화", "수", "목", "금", "토"];

  const NavdateItem = [
    {
      id: 1,
      content: "공유하기",
      href: true,
      img: "",
    },
    {
      id: 2,
      content: "저장",
      href: true,
      img: "",
    },
  ];


  return (
    <div id="dateNav" class="sub-header" style={{ padding_bottom: "10px;" }}>
      <div class="tabWrap">
        <div class="swipe-tabs">
          <ul class="swipe-tab slick-initialized slick-slider">
            <button
              class="slick-prev slick-arrow"
              aria-label="Previous"
              type="button"
              aria-disabled="false"
            >
              Previous
            </button>
            <div class="slick-list draggable">
              <div
                class="slick-track"
                style={{ opacity: "1", width: "1932px" }}
              >
                <li
                  id="datewrap"
                  class="dateWrap slick-slide isActive slick-slide"
                  data-slick-index="0"
                  aria-hidden="true"
                  tabindex="-1"
                  style={{ width: "132px" }}
                >
                  <p>{todayDate}</p> <span></span>
                </li>
                <li
                  id="datewrap"
                  class="dateWrap slick-slide"
                  data-slick-index="1"
                  aria-hidden="true"
                  tabindex="-1"
                  style={{ width: "132px" }}
                >
                  <p>{todayDate + 1}</p> <span>목</span>
                </li>
                <li
                  id="datewrap"
                  class="dateWrap slick-slide"
                  data-slick-index="2"
                  aria-hidden="true"
                  tabindex="-1"
                  style={{ width: "132px" }}
                >
                  <p>{todayDate + 2}</p> <span>금</span>
                </li>
                <li
                  id="datewrap"
                  class="dateWrap slick-slide isSat slick-current slick-active"
                  data-slick-index="3"
                  aria-hidden="false"
                  tabindex="0"
                  style={{ width: "132px" }}
                >
                  <p>{todayDate + 3}</p> <span>토</span>
                </li>
                <li
                  id="datewrap"
                  class="dateWrap slick-slide isSun slick-active"
                  data-slick-index="4"
                  aria-hidden="false"
                  tabindex="0"
                  style={{ width: "132px" }}
                >
                  <p>{todayDate + 4}</p> <span>일</span>
                </li>
                <li
                  id="datewrap"
                  class="dateWrap slick-slide slick-active"
                  data-slick-index="5"
                  aria-hidden="false"
                  tabindex="0"
                  style={{ width: "132px" }}
                >
                  <p>{todayDate + 5}</p> <span>월</span>
                </li>
                <li
                  id="datewrap"
                  class="dateWrap slick-slide slick-active"
                  data-slick-index="6"
                  aria-hidden="false"
                  tabindex="0"
                  style={{ width: "132px" }}
                >
                  <p>20</p> <span>화</span>
                </li>
                <li
                  id="datewrap"
                  class="dateWrap slick-slide slick-active"
                  data-slick-index="7"
                  aria-hidden="false"
                  tabindex="0"
                  style={{ width: "132px" }}
                >
                  <p>21</p> <span>수</span>
                </li>
                <li
                  id="datewrap"
                  class="dateWrap slick-slide slick-active"
                  data-slick-index="8"
                  aria-hidden="false"
                  tabindex="0"
                  style={{ width: "132px" }}
                >
                  <p>22</p> <span>목</span>
                </li>
                <li
                  id="datewrap"
                  class="dateWrap slick-slide slick-active"
                  data-slick-index="9"
                  aria-hidden="false"
                  tabindex="0"
                  style={{ width: "132px" }}
                >
                  <p>23</p> <span>금</span>
                </li>
                <li
                  id="datewrap"
                  class="dateWrap slick-slide isSat isXmas"
                  data-slick-index="10"
                  aria-hidden="true"
                  tabindex="-1"
                  style={{ width: "132px" }}
                >
                  <p>24</p> <span>토</span>
                </li>
                <li
                  id="datewrap"
                  class="dateWrap slick-slide isSun isXmas"
                  data-slick-index="11"
                  aria-hidden="true"
                  tabindex="-1"
                  style={{ width: "132px" }}
                >
                  <p>25</p> <span>일</span>
                </li>
                <li
                  id="datewrap"
                  class="dateWrap slick-slide"
                  data-slick-index="12"
                  aria-hidden="true"
                  tabindex="-1"
                  style={{ width: "132px" }}
                >
                  <p>26</p> <span>월</span>
                </li>
                <li
                  id="datewrap"
                  class="dateWrap slick-slide"
                  data-slick-index="13"
                  aria-hidden="true"
                  tabindex="-1"
                  style={{ width: "132px" }}
                >
                  <p>27</p> <span>화</span>
                </li>
              </div>
            </div>
            <button
              class="slick-next slick-arrow"
              aria-label="Next"
              type="button"
              style={{}}
              aria-disabled="false"
            >
              Next
            </button>
          </ul>
        </div>
      </div>{" "}
      <div class="main__filter">
        <div class="main--match--filter">
          <div class="filter--wrapper" style={{ width: "100%" }}>
            <ul>
              <li class="">
                <span class="list">내지역</span>
              </li>{" "}
              <li class="">
                <span>마감 가리기</span>
              </li>{" "}
              <li class="">
                <span class="list">성별</span>
              </li>{" "}
              <li class="">
                <select class="list">
                  레벨
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Day;

