const express = require("express");
const router = express.Router();
const AdService = require("./advertise.service");

//광고 경로 url 설정
router.get("/adlist", async (req, res) => {
  //응답만 설정하고싶다.

  //db로직을 처리하고싶다 -> service
  //네트워크 통신( db와) 할때는 무조건 try문을 사용
  try {
    console.log("광고목록 가져오기");
    const result = await AdService.getAllList();
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

router.get("/Validadlist", async (req, res) => {

  try {
    console.log("광고목록 가져오기");
    const result = await AdService.getAllList();
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});
module.exports = router;
