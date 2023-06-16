import config from "./config.js";

const { API_ENDPOINT } = config;

// 에러 목록화(예시로 500만 다룸)
const REQUEST_ERROR = {
  500: { msg: "요청실패" },
};

const request = async (url) => {
  // return fetch(url).then((res) => {
  //   return res.json();
  // });

  try {
    const result = await fetch(url);
    if (result.status === 200) {
      return result.json();
    } else {
      throw REQUEST_ERROR[result.status];
    }
  } catch (error) {
    alert(error.msg);
    return { data: null };
  }
};

const api = {
  fetchCats: (keyword) => {
    return fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
  },
  fetchCatsPage: (keyword, page) => {
    return fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}&page=${page}`);
  },
  fetchRandomCats: () => {
    return fetch(`${API_ENDPOINT}/api/cats/random50`);
  },
  fetchCatsDetail: (id) => {
    return fetch(`${API_ENDPOINT}/api/cats/${id}`);
  },
};

export default api;
