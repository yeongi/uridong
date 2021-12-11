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
    const {membernum} = req.body;
    const result = await playService.insertRsv(membernum);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});
//활동내역 추가하기-리뷰작성
router.post("/addPlayWreview", async (req, res) => {
  try {
    const {membernum} = req.body;
    const result = await playService.insertWreview(membernum);
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
