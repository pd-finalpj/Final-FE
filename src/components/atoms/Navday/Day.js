import'../../style/css/main.css';
import'../../style/css/Slide.css';
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";


const Day =()=>{

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
    let now = new Date();
    let todayDate = now.getDate(); //일
    const day = ["일", "월", "화", "수", "목", "금", "토"];

    let dayOfWeek = day[now.getDay()];//요일
    
    // const dateslide = [todayDate, todayDate+1, todayDate+2, todayDate+3, todayDate+4, todayDate+5, todayDate+6]


return(
    "데이터슬라이드자리"
    // {dateslide}

);
}
export default Day;