const CREATE_API = "http://localhost:4000/fav";

const FavApi = {
  addFavRst: (membernum, rstnum) => {
    return fetch(`${CREATE_API}/add`, {
      method: "post",
      body: JSON.stringify({
        member_num: membernum,
        rst_num: rstnum,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
  },
  getFavMember: (rstnum) => {
    return fetch(`${CREATE_API}/favlist/${rstnum}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },

  getPatronMember: (rstnum) => {
    return fetch(`${CREATE_API}/patron/${rstnum}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },

  getPatronReviewMember: (rstnum) => {
    return fetch(`${CREATE_API}/patron/review${rstnum}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
};

export default FavApi;
