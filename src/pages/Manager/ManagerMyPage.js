import React from 'react';
import ManagerMyPageInfo from "../../components/atoms/ManagerMyPage/ManagerMyPageInfo";
import ManagerMyPageMenu from "../../components/atoms/ManagerMyPage/ManagerMyPageMenu";
import '../../components/atoms/Mypage/MyPage.css'

const ManagerMypage =()=>{
    return(
        <div className='content_body content_body__double'>
            <ManagerMyPageInfo/>
            <ManagerMyPageMenu/>
        </div>
    );
}
export default ManagerMypage;