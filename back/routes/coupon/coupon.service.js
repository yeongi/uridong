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

  getMemberRstCoupon: async (info) => {
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
  getMyRst: async (rst_num) => {
    try {
      const conn = await pool.getConnection();
      const query = `SELECT coupon_num, coupon_name,sale_ratio,coupon_kind,use_possible_man  from restaurant_coupon where rst_num=?;`;
      const [result] = await conn.query(query, [rst_num]);
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

  giveCoupon: async (couponInfo) => {
    try {
      const { member_num, coupon_num1, coupon_num2, No_num } = couponInfo;
      const conn = await pool.getConnection();

      const yn_query = `UPDATE notification SET read_YN = 1 WHERE No_num=?;`;

      const query = `INSERT INTO member_coupon (
        member_num,
        coupon_num,
        print_attime,
        end_attime
        ) VALUES (?,?,NOW(),date_add(now(),interval (select use_possible_time from restaurant_coupon where coupon_num=?) hour));`;

      const [result] = await conn.query(query, [
        member_num,
        coupon_num1,
        coupon_num2,
      ]);

      const [yn_result] = await conn.query(yn_query, [No_num]);
      conn.release();
      console.log(result);
      console.log(yn_result);
      return result;
    } catch (error) {
      throw error;
    }
  },
};
