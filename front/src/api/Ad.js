const CREATE_API = "http://localhost:4000/ad";

const AdApi = {
  getList: () => {
    return fetch(`${CREATE_API}/adlist`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },

  delete: () => {},

  update: () => {},
};

export default AdApi;
