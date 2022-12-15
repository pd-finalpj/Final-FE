import "../components/style/css/Header.css"
const Header = () => {
    return (        
        <nav class="headerNavbar" >
            <div class ="headerNavbarLogo">
                <a href="" target='_blank'>
                    <img id="logo" src='https://ifh.cc/g/PNw9F7.png' border='0' alt="사이트로고" height="40" width="40"></img>
                </a>
                
            </div>
            <div class="headerNavbarMain">
                <div class="show-search">
                    <div class="search">                 
                        <img id="MagnifyingGlass" src='https://ifh.cc/g/gzZwc4.png' border='0' alt="돋보기아이콘" height="20" ></img>
                        <input class="searchbarInput" type="search" placeholder="지역이름으로 찾기"></input>                       
                    </div>                    
                </div>         
                <a href="" target='_blank'><img src='https://ifh.cc/g/mgQWrl.png' border='0' alt="마이페이지아이콘" height="20"></img></a>    
            </div>
            {/* <div class="headerNavbarLinks">
                //마이페이지 아이콘
                <a href="" target='_blank'><img src='https://ifh.cc/g/mgQWrl.png' border='0' alt="마이페이지아이콘" height="30"></img></a>
            </div> */}
        </nav>     
    );
}
export default Header;