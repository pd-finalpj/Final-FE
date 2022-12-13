import styled from 'styled-components';
import'../../style/css/main.css';
import  { withRouter } from 'react'


const Nav =()=>{
    var para = document.location.href.split("/").reverse()[0];
    console.log("para:" + para);

    function NavMain() {
        <div>
        <a href="/Main"  className="select" >매물 찾기</a> 
        <a href="/topic/">공지사항</a>
        </div>
    }
    function NavTopic() {
        <div>
        <a href="/Main" >매물 찾기</a> 
        <a href="/topic" className="select">공지사항</a>
        </div>
    }



    function PageControl(){
        if (para == 'Main'){
            return <NavMain/>
        }
    }


    return(
        <div class="navigation--container">
            <div class="navigation--wrapper">
                <div class="navigation--item">
                    <PageControl/>
                </div>
            </div>
        </div>
    );
}
export default Nav;
