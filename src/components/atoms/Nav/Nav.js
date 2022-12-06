import'../../style/css/main.css';


const Nav =()=>{

    return(
        <div class="navigation--container">
            <div class="navigation--wrapper">
                <div class="navigation--item">
                    <a href="/" class="selected">소셜 매치</a> 
                    <a href="/rental/">구장 예약</a>
                </div>
            </div>
        </div>
    );
}
export default Nav;
