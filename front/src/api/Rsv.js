const CREATE_API = "http://localhost:4000/rsv";

const RsvApi = {
  getMyRsvList: (memberNum) => {
    return fetch(`${CREATE_API}/listRsv/${memberNum}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },

  postMyRsv: (info) => {
    return fetch(`${CREATE_API}/doRsv`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(info),
    });
  },

  postRsvDo: (info) => {
    return fetch(`${CREATE_API}/update/rsv`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(info),
    });
  },

  postReviewDo: (info) => {
    return fetch(`${CREATE_API}/update/review`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(info),
    });
  },
};

export default RsvApi;
