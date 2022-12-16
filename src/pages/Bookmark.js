import React from "react";
import LoginImg from "../components/atoms/Login/LoginImg";

const Bookmark = () => {

    return(
        <div class="fadein">
            <LoginImg/>
        <div className="content-back">
        <div class="content-wrap">
        <form id="search-form" action="./" method="get">
        <div class="window-pop-product-view product-view">
        <div class="product-view-register">
            <div class="view-data square-shadow-box">
            <div class="default-view-content">
                <div class="view-top-category-wrap">
                <div class="view-top-category-table">
                    <div class="view-top-category-inner">
                        <div class="view-top-category-list">
                            <h3>
                                관심있는 경매 물품
                            </h3>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                <div class="view-content-wrap">
                    <input
                    id="auction_id"
                    type="hidden"
                    value="503_20210000571_001"
                    ></input>
                </div>
                </div>
            </div>
            </div>
        </form>
        </div>
        </div>
    </div>
    );
    
}


export default Bookmark;