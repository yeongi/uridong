var express = require("express");
var router = express.Router();
const FavService = require("./favorite.service");

//즐겨찾기 추가하기
router.post("/add", async (req, res) => {
  try {
    const result = await FavService.addFavorite(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//단골손님 
router.get("/patron/:rstnum", async (req, res) => {
  let { rstnum } = req.params;
  try {
    const result = await FavService.getpatronList(rstnum);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error });
  }
});

//한달 이상 리뷰안쓴 단골
router.get("/patron/:rstnum", async (req, res) => {
  let { rstnum } = req.params;
  try {
    const result = await FavService.getOneMonthpatronList(rstnum);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error });
  }
});
module.exports = router;
