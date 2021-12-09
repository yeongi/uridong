const express = require("express");
const router = express.Router();
const CouponService = require("./coupon.service");

router.get("/hav/:membernum", async (req, res) => {
  try {
    const { membernum } = req.params;
    const result = await CouponService.getMyCoupon(membernum);
    res.status(210).json({ status: 210, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

module.exports = router;
