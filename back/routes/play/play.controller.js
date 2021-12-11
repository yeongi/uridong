var express = require("express");
var router = express.Router();
const playService = require("./play.service");



router.get("/play", async (req, res) => {
  try {
    const result = await playService.getPlayList();
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error });
  }
});







//활동내역 추가하기-예약
router.post("/addPlayRsv", async (req, res) => {
  try {
    const result = await playService.insertRsv(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});
//활동내역 추가하기-리뷰작성
router.post("/addPlayWreview", async (req, res) => {
  try {
    const result = await playService.insertWreview(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});
//활동내역 추가하기-쿠폰사용
router.post("/addPlayUcoupon", async (req, res) => {
  try {
    const result = await playService.insertUcoupon(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});
//활동내역 추가하기-광고등록
router.post("/addPlayRAd", async (req, res) => {
  try {
    const result = await playService.insertRAd(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});
//활동내역 추가하기-쿠폰발급
router.post("/addPlayPcoupon", async (req, res) => {
  try {
    const result = await playService.insertPcoupon(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

router.post("/", async (req, res) => {
  try {
    const result = await RstService.asdf(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});


module.exports = router;
