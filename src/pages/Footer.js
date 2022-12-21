const Footer = () => {
    return (
        <div id = "footer">
            <div class="footerWrap">
                <div class = "footerNav">
                    <ul>
                        <h3>참가인원</h3>
                        <li>
                            <a href="https://gist.github.com/12OneTwo12" target="_blank" >정정일</a>                            
                        </li>
                        <li>
                            <a href="https://github.com/waitzero" target="_blank">정지영</a>                                                       
                        </li>
                        <li>
                            <a href="https://github.com/kyuri-L" target="_blank">이규리</a>                                                       
                        </li>
                        <li>
                            <a href="https://github.com/twghy" target="_blank">조재현</a>                                                       
                        </li>
                        <li>
                            <a href="https://github.com/yxxjxxxhxxx" target="_blank" >윤종현</a>                                                       
                        </li>                                   
                    </ul>
                    
                    <ul class="footerDul">
                        <h3>사용한 사이트</h3>
                        <li>
                            <a href="https://www.plabfootball.com/">카피웹사이트</a>
                        </li>
                        <li>
                            <a href="https://www.freelogodesign.org/">로고제작</a>
                        </li>

                        <li>
                            <a href="https://www.iconfinder.com/">아이콘</a>
                        </li>

                    </ul>

                    <ul>
                        <h3>땅땅땅!</h3>
                        <li>
                            <a href="">땅땅땅! 소개</a>
                        </li>
                        <li>
                            <a href="">공지사항</a>
                        </li>
                        <li>
                            <a href="">자주 묻는 질문</a>
                        </li>                    
                    </ul>

                    <ul>
                        <h3>저작권 침해</h3>
                        <li>
                            <a href="https://github.com/waitzero" target="_blank">게시중단요청</a>
                        </li>
                    </ul>
                
                </div>
                <div class = "company">
                    <h2>
                        <a href="http://localhost:3000/">
                            <img id="logo" src='https://ifh.cc/g/DKNAVf.png' border='0' alt="사이트로고" height="80" width="80"></img>
                        </a>
                        <br></br>
                        <a href="">ddangddangddang.com</a>
                        <p>집을 마련하고 싶을 땐, 땅땅땅!</p>
                        {/* <a><img src='https://ifh.cc/g/DKNAVf.png' border='0'></img></a> */}
                    </h2>                 
                    <br></br>
                    <span>
                        <a >이용 약관 | </a>
                        <a >개인정보 처리방침 | </a> 
                        땅땅땅! | 참고사이트 "플랩" | <br></br>Copyright <b>PLAB</b>                
                    </span>                 
                </div>
            </div>         
        </div>
    );

}
export default Footer;