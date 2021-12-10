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

//즐겨찾기 식당 리스트add
// router.get("/fav/:usernum", async (req, res) => {
//   let { usernum } = req.params;
//   try {
//     const result = await RstService.favRstList(usernum);
//     res.status(200).json({ status: 200, data: result, message: "Success" });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ status: 500, message: error });
//   }
// });

module.exports = router;
