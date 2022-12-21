import { buildQueries } from "@testing-library/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../../style/css/main.css";

const Nav = () => {

  
  const location = useLocation()
  const loc = location.pathname
  const navi = useNavigate();
  const move = ()=>{
    navi("/topic")
  }
  const move2 = ()=>{
    navi("/")
  
  }
  const Topic = styled.a`
/* color: red; */
font-weight: bold;
border-bottom: 3px solid orange;
`
const Topic2 = styled.b`
/* font-weight: bold; */
font-size: 100px;
border-bottom: 3px solid orange;
`

  return (
    <div class="navigation--container">
      <div class="navigation--wrapper">
        <div class="navigation--item">
          {/* <a  href="/" class="selected">
            경매 물품
          </a> */}
          {loc==="/topic" ?

          <b href="http://localhost:3000/" class="selected" onClick={()=>move2()}>경매내역</b>
          :
          <Topic2 href="http://localhost:3000/" class="selected" onClick={()=>move2()}>경매내역</Topic2>
          }

          {loc==="/topic" ? 
          
          <Topic onClick={()=>move()}>공지사항</Topic>
          :
          <a onClick={()=>move()}>공지사항</a>
          }
        </div>
      </div>
    </div>
  );
};
export default Nav;

