const pool = require("../../config/dbConfig");

module.exports = {
  doReservation: async (info) => {
    try {
      const { member_num, rst_num, rsv_man, arrive_predict_time } = info;
      const conn = await pool.getConnection();
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
