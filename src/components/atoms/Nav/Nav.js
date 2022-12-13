import'../../style/css/main.css';


const Nav =()=>{

    return(
        <div class="navigation--container">
            <div class="navigation--wrapper">
                <div class="navigation--item">
                    <a href="/" class="selected">매물 찾기</a> 
                    <a href="/rental/">공지사항</a>
                </div>
            </div>
        </div>
    );
}
export default Nav;
