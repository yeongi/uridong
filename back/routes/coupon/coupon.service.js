const pool = require("../../config/dbConfig");

module.exports = {
  getMyCoupon: async (userNum) => {
    try {
      const conn = await pool.getConnection(); //식당과 조인하여 해당 쿠폰에 대한 식당명 가져오기
      const query = "SELECT * FROM member_coupon where member_num = ?;";
      const [result] = await conn.query(query, [userNum]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
};
