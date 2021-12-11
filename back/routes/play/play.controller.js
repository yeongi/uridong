var express = require("express");
var router = express.Router();
const playService = require("./play.service");


router.get("/play", async (req, res) => {
  try {
    const result = await playService.getplayList();
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error });
  }
});

//활동내역 추가하기
router.post("/add", async (req, res) => {
  try {
    const result = await playService.addFavorite(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});



module.exports = router;
