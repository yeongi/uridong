var express = require("express");
const { off } = require("../../config/dbConfig");
var router = express.Router();
const UserService = require("./user.service");

//회원가입
router.post("/signUp", async (req, res) => {
  try {
    const result = await UserService.insertUser(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//로그인
router.post("/login", async (req, res) => {
  try {
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

//유저 계정 정보
router.get("/myInfo/:userNum", async (req, res) => {
  try {
    let { userNum } = req.params;
    const result = await UserService.getMyInfo(userNum);
    if (result.length === 0) {
      res.status(200).json({ status: 200, message: "No data" });
    } else {
      res.status(200).json({ status: 200, data: result, message: "Success" });
    }
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//유저 즐겨찾기
router.get("/myFavorite/:userNum", async (req, res) => {
  try {
    let { userNum } = req.params;
    const result = await UserService.getMyFavorite(userNum);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//유저 활동
router.get("/myPlay/:userNum", async (req, res) => {
  try {
    let { userNum } = req.params;
    const result = await UserService.getMyPlay(userNum);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//내 등록 식당 조회
router.get("/myRst/:userNum", async (req, res) => {
  try {
    let { userNum } = req.params;
    const result = await UserService.getMyRst(userNum);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//유저 전체 리스트 가져오기
router.get("/memberlist", async (req, res) => {
  try {
    console.log("lol");
    const result = await UserService.getUserList();
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

module.exports = router;
