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

module.exports = router;
