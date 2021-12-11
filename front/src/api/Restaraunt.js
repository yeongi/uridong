const CREATE_API = "http://localhost:4000/r/";

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
    return fetch(encodeURI(`${CREATE_API}list/${area}`), {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },

  getFavRstList: (membernum) => {
    return fetch(`${CREATE_API}fav/${membernum}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },

  getRstDetail: (rstnum) => {
    return fetch(`${CREATE_API}detail/${rstnum}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },

  postRsvReview: (info) => {
    return 1;
  },
};

export default RstApi;
