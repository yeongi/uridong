var express = require("express");
var router = express.Router();
const RstService = require("./restaraunt.service");

//식당 등록하기
router.post("/rst", async (req, res) => {
  try {
    const result = await RstService.insertRst(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//식당 리스트 가져오기
router.get("/rst", async (req, res) => {
  try {
    console.log("lol");
    const result = await RstService.getRstList();
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error });
  }
});

router.get("/list", async (req, res) => {
  res.send("리스트");
  // //식당 번호 배열을 넣음
  // RstService.getMainRstList();
});

module.exports = router;
