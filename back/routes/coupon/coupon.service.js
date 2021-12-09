const pool = require("../../config/dbConfig");

module.exports = {
  getMyCoupon: async (membernum) => {
    try {
      const conn = await pool.getConnection();
      const query = "SELECT * FROM member_coupon where member_num = ?;";
      const [result] = await conn.query(query, [membernum]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
};
