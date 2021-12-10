const express = require("express");
const router = express.Router();
const CouponService = require("./coupon.service");

//내 쿠폰 전체 확인
router.get("/hav/:userNum", async (req, res) => {
  try {
    const { userNum } = req.params;
    const result = await CouponService.getMyAllCoupon(userNum);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//식당에 대한 내 쿠폰 확인
router.get("/havRst", async (req, res) => {
  try {
    const result = await CouponService.getMyRstCoupon(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

module.exports = router;
