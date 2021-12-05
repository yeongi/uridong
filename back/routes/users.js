var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/nn", function (req, res, next) {
  console.log("test");
  res.send("respond with a resource");
});

module.exports = router;
