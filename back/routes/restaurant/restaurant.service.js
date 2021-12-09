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
        11, //회원 번호
        1, //카테고리 번호
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
  favRstList: async (userNum) => {
    //유저번호를 이용해서 즐겨찾기 식당 가져와서
    // 식당 정보를 조인 해서 리스트로 뽑아옴
    try {
      const conn = await pool.getConnection();
      const query = "SELECT * from favorite inner join restaurant on favorite.rst_num=restaurant.rst_num where member_num=?";
      const [result] = await conn.query(query,[userNum]);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  //지역검색
  areaRstList: async (area) => {
    try {
      const conn = await pool.getConnection();
      const query = "SELECT * FROM restaurant where res_address=? ;";
      const [result] = await conn.query(query,[area]);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

};
