import React from 'react';
import Search from '../../atoms/Search/Search'
import "./Header.css"

const header = () => {
  const isLogin = false;
  
    return (
      <div className='main'>
        <div className='containner'>
          <div className='center'>
            <a href="./">
              <img class="Logo-Img" src="/Image/Logo.png" alt="Header-Img"/>
            </a> 
            <div className='search'>
            <Search/>
            </div>
            <div class="icon">
           <a href="/mypage">
            <img  className='mypage' src="/Image/Mypage.png" alt="mypage"/>
           </a>
           </div>
           </div>
        </div>
        </div>
    );
};

export default header;