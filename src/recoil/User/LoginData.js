import { selector } from "recoil";
import { atom } from "recoil";

const getUserInfo = selector({
    key: 'getUserInfo',
    get: async ({ get }) => {
      const response = await axios.get('http://localhost:8080/userlogin');
      return response.data;
    },
  });