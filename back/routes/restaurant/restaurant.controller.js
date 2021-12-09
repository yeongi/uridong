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
//
router.get("/list", async (req, res) => {
  // //식당 번호 배열을 넣음
  // 메인페이지에 띄워줄 식당 정보
  // RstService.getMainRstList();
  try {
    const result = await RstService.getMainRstList();
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error });
  }
});

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

<<<<<<< HEAD
=======
router.get("/main/:usernum", async (req, res) => {
  let { usernum } = req.usernum;
  //검색지역의 식당 리스트 가져오기
  try {
    const result = await RstService.favRstList(usernum);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error });
  }
});

>>>>>>> 767367c7aae6598c5993f17eebed7364561ca279
module.exports = router;
