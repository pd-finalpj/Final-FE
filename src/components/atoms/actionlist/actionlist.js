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
  const [datas, setDatas] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoad(true);
      try {
        const response = await axios.get(
          "http:///3.34.237.17:8080/auction-list/"
        );
        console.log(response.data);
        setDatas(response.data.filteringItemsResponseList);
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
    <Containner>
      {load ? (
        <div>기다림</div>
      ) : (
        datas.map((filteringItemsResponseList) => (
          <Link to={`/Detail/${filteringItemsResponseList.auctionItemId}`}>
            <ActionItem
              key={filteringItemsResponseList.auctionItemId}
              filteringItemsResponseList={filteringItemsResponseList}
            ></ActionItem>
          </Link>
        ))
      )}
    </Containner>
  );
};
export default Actionlist;
