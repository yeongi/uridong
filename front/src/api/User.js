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

  getMyCouponList: (memberNum) => {},

  delete: () => {},

  update: () => {},
};

export default UserAPI;
