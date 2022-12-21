const TopicDetail =()=>{

    return(
        <div>
        <div class="content">
  <div class="contentWrapper">
    <div class="helpHeader">
      <div class="helpTitle">
        <ol>
          <li><a href="/cs/6/topics/">공지사항</a></li>
        </ol>
      </div>
    </div>
    <div class="articleWrap">
      <div class="articleTitle">
        <h1>2파전 매치가 3파전으로 변경됩니다</h1>
      </div>
      <div class="articleBody">
        <pre></pre>
        <ul class="helpTagWrap">
          <p>관련 키워드</p>
          
        </ul>
        
          <div class="evlauation" id="selected_default">
            <p>도움이 되었나요?</p>
            <div class="btnWrap">
              <div class="btnWrapper">
                <span class="btn vote" style={{cursor:"pointer"}} onclick="pressedYesButton()">네</span>
                <span class="btn vote" style={{cursor:"pointer"}} onclick="pressedNoButton()">아니오</span>
              </div>
            </div>
          </div>
        
        <div class="evlauation" id="selected_no" style={{display:" none"}}>
          <p>도움이 되지 않은 이유를 알려주세요</p>
          <div class="btnWrap">
            <span value={1} style={{cursor:"pointer"}} onclick="pressedReasonButton(1)" class="btn voteLG">내용이 부실해요</span>
            <span value={2} style={{cursor:"pointer"}} onclick="pressedReasonButton(2)" class="btn voteLG">무슨 말인지 모르겠어요</span>
            <span value={3} style={{cursor:"pointer"}} onclick="pressedReasonButton(3)" class="btn voteLG">원하는 답변이 아니에요</span>
          </div>
        </div>
        <div class="evlauation" id="selected_yes" style={{display:" none"}}>
          <p class="pfMsg">도움이 되어서 기뻐요!</p>
        </div>
        <div class="evlauation" id="selected_reason" style={{display:" none"}}>
          <p>개선에 도움을 주셔서 감사합니다</p>
          <p class="pfMsg">원하는 답변을 얻을 수 없는 경우<br/>채널톡으로 문의해주세요</p>
        </div>
      </div>
    </div>
</div>
</div>
</div>
    );

}
export default TopicDetail;
      
