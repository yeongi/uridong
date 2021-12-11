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
  lookMakeCoupon: async (info) => {
    try {
      const { rst_num } = info;
      const conn = await pool.getConnection();
      const query = `SELECT *
      FROM restaurant_menu where rst_num = ?;`;
      const [result] = await conn.query(query, [rst_num]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  makeCoupon: async (couponInfo) => {
    try {
      const {
        rst_num,
        menu_num, //임시로 하드코딩
        coupon_kind,
        coupon_name,
        menu_name,
        pic_file_path, //임시로 null처리
        use_possible_man,
        use_possible_time,
      } = couponInfo; //식당쿠폰과 메뉴 조인
      const conn = await pool.getConnection();
      const query = `INSERT INTO restaurant_coupon (rst_num, menu_num,
        coupon_kind,
        coupon_name,
        menu_name,
        pic_file_path,
        use_possible_man,
        use_possible_time,) VALUES (?,4,?,?,?,null,?,?);`;
      const [result] = await conn.query(query, [
        rst_num,
        // menu_num
        coupon_kind,
        coupon_name,
        menu_name,
        // pic_file_path,
        use_possible_man,
        use_possible_time,
      ]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
};
