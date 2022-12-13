import React from'react';
import MyPageInfo from '../components/atoms/Mypage/MyPageInfo';
import MyPageMenu from '../components/atoms/Mypage/MyPageMenu'
import '../components/atoms/Mypage/MyPage.css'
const Mypage =()=>{
    return(
        <div className='content_body content_body__double'>
            <MyPageInfo/>
            <MyPageMenu/>
        </div>
    );
}
export default Mypage;