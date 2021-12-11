const pool = require("../../config/dbConfig");
const playService = require("../play/play.service");

module.exports = {
  doReservation: async (info) => {
    try {
      const { member_num, rst_num, rsv_man, arrive_predict_time } = info;
      const conn = await pool.getConnection();
      //play에 서비스를 구현 한것을 가져와서 여기다가 사용한다.
      const play_res = await playService.insertRsv(member_num);
      const query = `INSERT INTO restaurant_reservation (member_num, rst_num, rsv_attime, rsv_man, arrive_predict_time) VALUES (?,?,NOW(),?,?);`;
      const [result] = await conn.query(query, [
        member_num,
        rst_num,
        rsv_man,
        arrive_predict_time,
      ]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
};
// `SELECT reservation.rsv_attime, reservation.rsv_man FROM reservation where member_num = ? AND rst_num = ?;`;
