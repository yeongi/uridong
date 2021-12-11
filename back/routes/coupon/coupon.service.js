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
        menu_num,
        rst_num,
        coupon_name,
        sale_ratio,
        coupon_kind,
        pic_file_path, //임시로 null처리
        coupon_print_attime, //NOW()로 가져옴
        use_possible_time,
        use_possible_man,
      } = couponInfo; //식당쿠폰과 메뉴 조인
      const conn = await pool.getConnection();
      const query = `INSERT INTO restaurant_coupon (menu_num, rst_num, coupon_name,
          sale_ratio,
          coupon_kind,
          pic_file_path,
          coupon_print_attime,
          use_possible_time,
          use_possible_man
          ) VALUES (4,?,?,?,?,null,NOW(),?,?);`;
      const [result] = await conn.query(query, [
        rst_num,
        coupon_name,
        sale_ratio,
        coupon_kind,
        use_possible_time,
        use_possible_man,
        // pic_file_path,
        // menu_num
      ]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
};
