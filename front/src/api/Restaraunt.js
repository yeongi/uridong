const CREATE_API = "http://localhost:4000/r/rst";

const RstApi = {
  create: (rstInfo) => {
    return fetch(CREATE_API, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(rstInfo),
    });
  },

  getFavRst: () => {},

  getList: () => {},

  delete: () => {},

  update: () => {},
};

export default RstApi;
