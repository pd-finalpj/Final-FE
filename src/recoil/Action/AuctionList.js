const getUserInfo = selector({
    key: 'Auctionlist',
    get: async ({ get }) => {
      const response = await axios.get('https://some-url.com');
      return response.data;
    },
  });