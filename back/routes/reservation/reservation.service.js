const pool = require("../../config/dbConfig");
const playService = require("../play/play.service");
const favoriteService = require("../favorite/favorite.service");

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
  listReservation: async (userNum) => {
    try {
      const conn = await pool.getConnection();
      const query = `SELECT * FROM restaurant_reservation where member_num = ?;`;
      const [result] = await conn.query(query, [userNum]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  updateRsvStatus: async (info) => {
    try {
      const { member_num, rsv_num, rst_num } = info;
      const conn = await pool.getConnection();
      const play_res = await playService.insertRsv(member_num);
      const fav_res = await favoriteService.updateRsvFavNum({
        member_num: member_num,
        rst_num: rst_num,
      });
      const query = `UPDATE restaurant_reservation set rsv_status = "이행" WHERE member_num = ? AND rsv_num = ?;`;
      const [result] = await conn.query(query, [member_num, rsv_num]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  updateReviewStatus: async (info) => {
    try {
      const { member_num, rsv_num } = info;
      const conn = await pool.getConnection();
      const play_res = await playService.insertWreview(member_num);
      const query = `UPDATE restaurant_reservation set rsv_status = "리뷰작성완료" WHERE member_num = ? AND rsv_num = ?;`;
      const [result] = await conn.query(query, [member_num, rsv_num]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
};
// `SELECT reservation.rsv_attime, reservation.rsv_man FROM reservation where member_num = ? AND rst_num = ?;`;
