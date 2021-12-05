import User from "../api/User";

const SUCCESS = 200;
const FAIL = 500;

const userHandler = {
  create: async (user) => {
    try {
      let apiResult = await User.create(user);

      const { status } = apiResult;

      if (status === SUCCESS) {
        return true;
      }
    } catch (error) {
      console.log("회원가입 실패");
      return false;
    }
  },
};

export default userHandler;
