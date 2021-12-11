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
};

export default FavApi;
