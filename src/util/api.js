import axios from "axios";

const BASE_URL = "http://3.34.237.17:8080/";

export const api = axios.get({
  baseURL: { BASE_URL },
  //쿼리로 넘길 키들을 prams 객체에 키밸류로 순서대로 넣어준다.
  params: {
    api_key: "받은 api",
    laguage: "밸류",
  },
});

export default api;

// export const fetchPatch = (url, id, data) => {
//     fetch(`${url}${id}`, {
//       method : "PATCH",
//       headers: {"Content-Type" : "Application/json"},
//       body: JSON.stringify(data)
//     })
//     .then(() => {
//       // window.location.href = `${BASE_URL}${id}`;
//       window.location.href = BASE_URL;
//     })
//     .catch((error) => {
//       console.error('Error', error);
//     })
// }
export const fetchPatch = (url, id, data) => {
  fetch(`${url}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify(data),
  })
    .then(() => {
      // window.location.href = `${BASE_URL}${id}`;
      window.location.href = BASE_URL;
    })
    .catch((error) => {
      console.error("Error", error);
    });
};
