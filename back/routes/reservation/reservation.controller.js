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

//예약 상태 변경하기
router.post("/updateRsv", async (req, res) => {
  try {
    const result = await ReservationService.updateReservation(req.body);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});

module.exports = router;
