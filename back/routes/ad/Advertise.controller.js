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
//유효한 광고 리스트 가져오기
router.get("/Validadlist", async (req, res) => {
try {
    console.log("유효한 광고목록 가져오기");
    const result = await AdService.Validadlist();
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});
//유효하지 않은 광고리스트 가져오기
router.get("/inValidAdlist", async (req, res) => {
  try {
    console.log("유효하지않은 광고목록 가져오기");
    const result = await AdService.inValidAdlist();
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});
//광고 등록 신청하기
router.post("/AdReApp", async (req, res) => {
  try {
    const result = await AdService.registappAd();
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});
//광고 승인하기
router.get("/accAd/:ADnum", async (req, res) => {
  let { ADnum } = req.params;
  try {
    const result = await AdService.acceptAd(ADnum);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});
module.exports = router;
