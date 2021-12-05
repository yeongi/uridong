const { v4 } = require("uuid");
const pool = require("../../config/dbConfig");

module.exports = {
  insertRst: async (rstInfo) => {
    try {
      const {
        rst_name,
        rst_call_num,
        rst_addr,
        // rst_category,
        parton_rule,
        patron_maintain,
        all_table_each,
        rule_table,
        max_predict_time,
      } = rstInfo;
      const conn = await pool.getConnection();
      const query = `INSERT INTO restaurant
            (rst_num,
              seller_member_num,
              category_num,
              rst_name,
              rst_call_num,
              rst_address,
              rst_regist_date,
              license_file_path,
              pic_file_path,
              patron_rule,
              patron_maintain,
              all_table_each,
              rsv_rule_now_table_each,
              max_predict_time
                ) VALUES (
                    ?,
                    ?,
                    ?,
                    ?,
                    ?,
                    UNIX_TIMESTAMP(),
                    ?,?,?,?,?,?,?,?
                );`;
      const [{ affectRows: result }] = await conn.query(query, [
        Math.floor(Math.random() * 10000000) + 1000000,
        //일단 샘플 데이터로
        11,
        1,
        rst_name,
        rst_call_num,
        rst_addr,
        null,
        null,
        parton_rule,
        patron_maintain,
        all_table_each,
        rule_table,
        max_predict_time,
      ]);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  getRstList: async () => {
    try {
      const conn = await pool.getConnection();
      const query = "SELECT * FROM restaurant;";
      const [result] = await conn.query(query);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  updateRst: (userInfo) => {},
  deleteRst: (userInfo) => {},
};
