import "../../style/css/main.css";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ActionItem from "./actionItem";
import { Link } from "react-router-dom";

const Containner = styled.ul`
  width: "  70%";
  margin: "0 auto";
`;

const Actionlist = () => {
  const [item, setItem] = useState([]);
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoad(true);
      try {
        const response = await axios.get(
          "http:///3.34.237.17:8080/auction-list/"
        );
        console.log(response.data);
        setItem(response.data.filteringItemsResponseList);
      } catch (e) {
        console.log(e);
      }
      setLoad(false);
    };
    fetchData();
  }, []);

  // if (load) {
  //   return <div>기다림</div>;
  // }
  // if (!datas) {
  //   return null;
  // }

  return (
    <div>
      <div class="show-search">
        <div class="search">
          <img
            id="MagnifyingGlass"
            src="https://ifh.cc/g/gzZwc4.png"
            border="0"
            alt="돋보기아이콘"
            height="20"
          ></img>
          <input
            class="searchbarInput"
            type="search"
            placeholder="지역이름으로 찾기"
            value={search}
            onChange={onChange}
          ></input>
        </div>
      </div>
      <Containner>
        {load ? (
          <div>기다림</div>
        ) : (
          item.map((filteringItemsResponseList) => (
            <Link to={`/Detail/${filteringItemsResponseList.auctionItemId}`}>
              <ActionItem
                key={filteringItemsResponseList.auctionItemId}
                filteringItemsResponseList={filteringItemsResponseList}
              ></ActionItem>
            </Link>
          ))
        )}
      </Containner>
    </div>
  );
};
export default Actionlist;
