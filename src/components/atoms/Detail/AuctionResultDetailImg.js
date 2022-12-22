import React, { useState } from "react";
import './AuctionResultDetails.css'

const AuctionResultDetailImg = () => { // 이미지 파람으로 가져오기

    const imageFile = useState();

    var index = 0;
    window.onload = function() {
        slideShow();
    }

    function slideShow() {
        var i;
        var x = document.getElementsByClassName("item-img");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        index++;
        if (index > x.length) {
            index = 1;
        }
        x[index - 1].style.display = "block";
        setTimeout(slideShow, 4000);
    }

    return(
        <div className="itemimg">
            <img alt="itemimg" class="item-img" src="/Image/login/Login1.jpg"></img>
            <img alt="itemimg" class="item-img" src="/Image/login/Login2.jpg"></img>
            <img alt="itemimg" class="item-img" src="/Image/login/Login3.png"></img>
        </div>
    )
}

export default AuctionResultDetailImg;