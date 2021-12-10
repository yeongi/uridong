const CREATE_API = "http://localhost:4000/r";

const RstApi = {
  create: (rstInfo) => {
    return fetch(CREATE_API + "rst", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(rstInfo),
    });
  },

  getAreaRst: (area) => {
    return fetch(encodeURI(`${CREATE_API}/list/${area}`), {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },

  getList: () => {},

  delete: () => {},

  update: () => {},
};

export default RstApi;
