import "../../components/style/css/main.css"
import Nav from'../../components/atoms/Nav/Nav.js'

const Topic =()=>{
    

    return(

    <div className="mainwrap">
            < Nav />
        <div className="content">
  <div className="contentWrapper">
    </div>
    <div className="topicBubble">
        <h1 className="helpBB active" href="#">공지사항</h1>
    </div>
    <div className="topicList">
      <ul>
        
          <li>
            <a href="/">
              <p className="time">2022년 12월 9일</p> 
              <h2>2파전 매치가 3파전으로 변경됩니다</h2>
            </a>
          </li>
        
          <li>
            <a href="/">
               <p className="time">2022년 12월 9일</p>
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