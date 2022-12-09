import "../../components/style/css/main.css"

const Topic =()=>{
    

    return(
    <div className="mainwrap">
        <div class="content">
  <div class="contentWrapper">
    </div>
    <div class="topicBubble">
        <h1 class="helpBB active" href="#">공지사항</h1>
    </div>
    <div class="topicList">
      <ul>
        
          <li>
            <a href="/">
              <p class="time">2022년 12월 9일</p> 
              <h2>2파전 매치가 3파전으로 변경됩니다</h2>
            </a>
          </li>
        
          <li>
            <a href="/">
               <p class="time">2022년 12월 9일</p>
              <h2>월드컵 기간 소셜 매치 운영</h2>
            </a>
          </li>
        
    
        
      </ul>
    </div>
  </div>
  </div>
);
}
export default Topic;