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

//즐겨찾기멤버 리스트
router.get("/favlist/:rstnum", async (req, res) => {
  let { rstnum } = req.params;
  try {
    const result = await FavService.getFavMemList(rstnum);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error });
  }
});

//식당에 대한 모든 단골손님 리스트
router.get("/patron/:rstnum", async (req, res) => {
  let { rstnum } = req.params;
  try {
    const result = await FavService.getPatronList(rstnum);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error });
  }
});

//한달 이상 리뷰안쓴 단골 리스트
router.get("/patron/review/:rstnum", async (req, res) => {
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
