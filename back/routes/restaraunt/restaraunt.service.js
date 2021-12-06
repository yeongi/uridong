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
        patron_rule,
        patron_maintain,
        all_table_each,
        rule_table,
        max_predict_time,
      } = rstInfo;
      const conn = await pool.getConnection();
      const query = `INSERT INTO restaurant
            (
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
                    ?,
                    ?,
                    ?,
                    ?,
                    ?,
                    ?,
                    ?,
                    ?
                );`;
      const [{ affectRows: result }] = await conn.query(query, [
        //일단 샘플 데이터로
        11,
        1,
        rst_name,
        rst_call_num,
        rst_addr,
        new Date(),
        "서류파일",
        "사진파일",
        patron_rule,
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
