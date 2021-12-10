const CREATE_API = "http://localhost:4000/cp";

const CpApi = {
  getMyCouponList: (memberNum) => {
    return fetch(`${CREATE_API}/hav/${memberNum}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },

  getMyRstCouponList: (membernum, rstnum) => {
    return fetch(`${CREATE_API}/havRst`, {
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

  update: () => {},
};

export default CpApi;
