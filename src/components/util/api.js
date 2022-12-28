import axios from "../../../node_modules/axios/index";

export const fetchData = async () => {
    setLoad(true);
    try {
      const response = await axios.get("http://3.34.237.17:8080/api/wnotice-list");
      console.log(response.data);
      setDatas(response.data.noticeDetailsResponseList);
    } catch (e) {
      console.log(e);
    }
    setLoad(false);
  };
  fetchData();
}, []);