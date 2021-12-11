const CREATE_API = "http://localhost:4000/users";

const UserAPI = {
  create: (user) => {
    return fetch(`${CREATE_API}/signUp`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  },

  checkLogin: (member) => {
    return fetch(`${CREATE_API}/login`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(member),
    });
  },
  getMyInfo: (memberNum) => {
    return fetch(`${CREATE_API}/myinfo/${memberNum}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },

  getMyFav: (memberNum) => {
    return fetch(`${CREATE_API}/myFavorite/${memberNum}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },

  getMyRst: (memberNum) => {
    return fetch(`${CREATE_API}/myRst/${memberNum}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },

  getMyPlay: (memberNum) => {
    return fetch(`${CREATE_API}/myPlay/${memberNum}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },

  postRstToUser: (info) => {
    return fetch(`${CREATE_API}/noti/cp`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(info),
    });
  },
};

export default UserAPI;
