const Footer = () => {
    return (
        <div id = "footer">
            <div class="footerWrap">
                <div class = "footerNav">
                    <ul>
                        <h3>매물</h3>
                        <li>
                            <a href="/">모든 매물</a>                            
                        </li>                       
                    </ul>
                    
                    <ul class="footerDul">
                        <h3>찾으시는 지역</h3>
                        <li>
                            <a href="/region/1/matches/">서울</a>
                        </li>

                        <li>
                            <a href="/region/6/matches/">부산/울산/경남</a>
                        </li>
                    </ul>

                    <ul>
                        <h3>땅땅땅!</h3>
                        <li>
                            <a href="/about/">땅땅땅! 소개</a>
                        </li>
                        <li>
                            <a href="/cs/6/topics/">공지사항</a>
                        </li>
                        <li>
                            <a href="/cs/">자주 묻는 질문</a>
                        </li>                    
                    </ul>

                    <ul>
                        <h3>소셜 미디어</h3>
                        <li>
                            <a href="https://www.instagram.com/plabfootball/" target="_blank">인스타그램</a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/plabfootball/?eid=ARCbIV7J0pdkC-eNTR8kOKz3Ce0WYjnpR9McmLlOQheslzEURQrjx5wYdcwv0SAVs3DofNPxG6_iaY_f" target="_blank">페이스북</a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/groups/plabfootball/" target="_blank">페이스북 그룹</a>
                        </li>
                    </ul>
                
                </div>
                <div class = "company">
                    <h2>
                        <a href="/">ddang.com</a>
                        <p>집을 마련하고 싶을 땐, 땅땅땅!</p> 
                    </h2>                 
                    <br></br>
                    <span>
                        <a href="/term/">이용 약관 | </a>
                        <a href="/privacy/">개인정보 처리방침 | </a> 
                        땅땅땅! | 참고사이트 플랩 | Copyright | <b>PLAB</b> | All rights reserved. |                       
                    </span>                 
                    {/* <span class="copyright">
                        Copyright 
                        <b>PLAB</b> 
                        All rights reserved.
                    </span>                  */}
                </div>
            </div>         
        </div>
    );

}
export default Footer;