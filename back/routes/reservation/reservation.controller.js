const express = require("express");
const router = express.Router();
const ReservationService = require("./reservation.service");

//예약하기
router.post("/doRsv", async (req, res) => {
  try {
    const result = await ReservationService.doReservation(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//회원 예약 리스트
router.get("/listRsv/:userNum", async (req, res) => {
  try {
    const { userNum } = req.params;
    const result = await ReservationService.listReservation(userNum);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//예약 상태 변경하기(예약 이행 시)
router.post("/update/rsv", async (req, res) => {
  try {
    const result = await ReservationService.updateRsvStatus(req.body);
    console.log(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

//예약 상태 변경하기(리뷰 작성 시)
router.post("/update/review", async (req, res) => {
  try {
    const result = await ReservationService.updateReviewStatus(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

module.exports = router;
