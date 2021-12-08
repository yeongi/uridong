var express = require("express");
const { off } = require("../../config/dbConfig");
var router = express.Router();
const UserService = require("./user.service");

router.post("/signUp", async (req, res) => {
  try {
    const result = await UserService.insertUser(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});
/* GET home page. */
router.get("/memberlist", async (req, res) => {
  try {
    console.log("lol");
    const result = await UserService.getUserList();
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log("lol");
    const result = await UserService.checkUser(req.body);
    console.log(result);
    if (result === 0) {
      res.status(200).json({
        status: 200,
        body: result,
        message: "Fail",
      });
    } else {
      res.status(200).json({
        status: 200,
        data: result,
        message: "Success",
      });
    }
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

router.get("/:userNum", async (req, res) => {
  //db 내계정 정보 가져오는 서비스
  try {
    //파라미터를 사용
    let { userNum } = req.params;
    const result = await UserService.getMyInfo(userNum);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

module.exports = router;
