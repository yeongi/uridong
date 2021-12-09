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

  delete: () => {},

  update: () => {},
};

export default CpApi;
