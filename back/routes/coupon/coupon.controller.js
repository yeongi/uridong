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
router.post("/havRst", async (req, res) => {
  try {
    const result = await CouponService.getMemberRstCoupon(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

// //쿠폰 발급화면 보기 -> 메뉴 num을 가져와 메뉴이름 전체 조회
// router.get("/madePage", async (req, res) => {
//   try {
//     const result = await CouponService.lookMakeCoupon(req.body);
//     res.status(200).json({ status: 200, data: result, message: "Success" });
//   } catch (error) {
//     return res.status(500).json({ status: 500, message: error });
//   }
// });

//쿠폰 발급
router.post("/made", async (req, res) => {
  try {
    const result = await CouponService.makeCoupon(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

router.get("/rst/:rstnum", async (req, res) => {
  try {
    const { rstnum } = req.params;
    const result = await CouponService.getMyRst(rstnum);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

module.exports = router;
