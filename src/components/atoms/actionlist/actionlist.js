import "../../style/css/main.css";
import styled from "styled-components";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ActionItem from "./actionItem";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Containner = styled.ul`
  width: "  70%";
  margin: "0 auto";
`;

const Actionlist = ({ isClick }) => {
  const [page, setPage] = useState(1);
  const [item, setItem] = useState([]);
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState("");
  const [found, setFound] = useState([]);
  const [ref, inView] = useInView();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const getItems = useCallback(async () => {
    setLoad(true);
    await axios
      .get(`http:///3.34.237.17:8080/auction-list/?pageNum=${page}`)
      .then((response) => {
        setItem((prevState) => [
          ...prevState,
          ...response.data.filteringItemsResponseList,
        ]);
        // setFound(response.data.filteringItemsResponseList);
        setFound((prevState) => [
          ...prevState,
          ...response.data.filteringItemsResponseList,
        ]);
      });
    setLoad(false);
  }, [page]);

  useEffect(() => {
    getItems();
  }, [getItems]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !load && found.hasnext === "true") {
      setPage((page) => page + 1);
    }
  }, [inView, load, found]);

  useEffect(() => {}, [setLoad]);

  useEffect(() => {
    if (isClick && search) {
      const dateFilter = keyFiltering(dateFiltering(item, isClick), search);
      setFound(dateFilter);
    } else if (isClick) {
      const dateFilter = dateFiltering(item, isClick);
      setFound(dateFilter);
    } else if (search) {
      const dateFilter = keyFiltering(item, search);
      setFound(dateFilter);
    } else {
      setFound(item);
    }
  }, [isClick, item, search]);

  const dateFiltering = (found, isClick) => {
    return found.filter((el) => el.auctionEndDate.includes(isClick));
  };
  const keyFiltering = (found, key) => {
    return found.filter((el) => el.auctionItemName.includes(key));
  };
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
          found.map((filteringItemsResponseList, index) =>
            index === found.length - 1 ? (
              <Link
                to={`/Detail/${filteringItemsResponseList.auctionItemId}`}
                ref={ref}
                key={filteringItemsResponseList.auctionItemId}
              >
                <ActionItem
                  filteringItemsResponseList={filteringItemsResponseList}
                ></ActionItem>
              </Link>
            ) : (
              <Link
                to={`/Detail/${filteringItemsResponseList.auctionItemId}`}
                key={filteringItemsResponseList.auctionItemId}
              >
                <ActionItem
                  filteringItemsResponseList={filteringItemsResponseList}
                ></ActionItem>
              </Link>
            )
          )
        )}
      </Containner>
    </div>
  );
};
export default Actionlist;
