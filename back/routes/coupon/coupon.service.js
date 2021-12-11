const pool = require("../../config/dbConfig");

module.exports = {
  getMyAllCoupon: async (userNum) => {
    try {
      const conn = await pool.getConnection();
      const query = `SELECT restaurant_coupon.coupon_name, member_coupon.print_attime, member_coupon.end_attime, member_coupon.use_yn
      FROM member_coupon join restaurant_coupon 
      on member_coupon.coupon_num = restaurant_coupon.coupon_num 
      where member_num = ?;`;
      const [result] = await conn.query(query, [userNum]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  getMyRstCoupon: async (info) => {
    try {
      const { member_num, rst_num } = info;
      const conn = await pool.getConnection();
      const query = `SELECT restaurant_coupon.coupon_name, member_coupon.print_attime, member_coupon.end_attime
      FROM member_coupon join restaurant_coupon 
      on member_coupon.coupon_num = restaurant_coupon.coupon_num 
      where member_num = ? AND rst_num = ?;`;
      const [result] = await conn.query(query, [member_num, rst_num]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
};
