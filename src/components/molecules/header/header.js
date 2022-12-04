import React from 'react';
import Search from '../../atoms/Search/Search'

const header = () => {
    return (
      <div>
        <div>
            <a href="./">
                <img src="https://cdn-icons-png.flaticon.com/512/411/411716.png"/>
            </a>
           <div>
            <Search></Search>
           </div>
           <div>
            호스트 버튼
           </div>
           <div>
            마이페이지 버튼
           </div>
        </div>
      </div>
    );
};

export default header;