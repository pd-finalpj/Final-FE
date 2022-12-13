import React from "react";
import './Search.css'
const search =()=>{

return(
    <div>
    <div class="wrapper">
        <form id="todo-form" class="form">
            <input required maxlength="10" type="text" placeholder="SEARCH"/>
        </form>
        <button type="submit" form="todo-form">제출하기</button>
        <div class="todo-inner">
            <div class="allDelete off">
                <h2 class="tit">최근 검색어</h2>
                <span class="btn">모두 지우기 ❌</span>
            </div>
            <p class="txt"></p>
            <ul id="todo-list"></ul>
        </div>
    </div>
    </div>
);
}
export default search;