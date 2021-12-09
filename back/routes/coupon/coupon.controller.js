const express = require("express");
const router = express.Router();
const CouponService = require("./coupon.service");

router.get("/hav/:userNum", async (req, res) => {
  try {
    const { userNum } = req.params;
    const result = await CouponService.getMyCoupon(userNum);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

module.exports = router;
