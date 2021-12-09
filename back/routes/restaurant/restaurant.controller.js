var express = require("express");
var router = express.Router();
const RstService = require("./restaurant.service");

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
    const result = await RstService.getRstList();
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error });
  }
});

//지역 식당 리스트
router.get("/list/:area", async (req, res) => {
  let { area } = req.area;
  //검색지역의 식당 리스트 가져오기
  try {
    const result = await RstService.areaRstList(area);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error });
  }
});

//즐겨찾기 식당 리스트
router.get("/fav/:usernum", async (req, res) => {
  let { usernum } = req.params;
  try {
    const result = await RstService.favRstList(usernum);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error });
  }
});

//식당상세 화면
router.get("/detail/:rstnum", async (req, res) => {
  let { rstnum } = req.params;
  try {
    const result = await RstService.getRstDetail(rstnum);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error });
  }
});

module.exports = router;
