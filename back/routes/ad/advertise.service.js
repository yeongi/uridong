const pool = require("../../config/dbConfig");

module.exports = {
  //광고 전체 리스트 
  getAllList: async () => {
    try {
      const conn = await pool.getConnection();
      const query = "SELECT * FROM ad;";
      const [result] = await conn.query(query);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  //광고 등록 신청
  registappAd:async (raaInfo) => {
    try {
      const {
        ad_detail_num,
        ad_num,
        rst_num,
        ad_name,
        ad_content,
        pic_file_path,
        
        ad_term,
        
        
        total_price
        }=raaInfo;
      const conn = await pool.getConnection();
      const query = `INSERT INTO ad_detail
      (
        ad_detail_num,
        ad_num,
        rst_num,
        ad_name,
        ad_content,
        pic_file_path,
        ad_start_date,
        ad_term,
        ad_extent_count,
        notice_service_count,
        total_price
          ) VALUES (
              ?,
              ?,
              ?,
              ?,
              ?,
              ?,
              NULL,
              ?,
              NULL,
              NULL,
              ?
          );`;
      const [result] = await conn.query(query,
        [
          ad_detail_num,
        ad_num,
        rst_num,
        ad_name,
        ad_content,
        pic_file_path,
        
        ad_term,
        
        
        total_price
        ]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  //시작기간 입력된 (승인된,유효한) 광고
  getValidAd: async () => {
    try {
      const conn = await pool.getConnection();
      const query = "SELECT * FROM ad_detail where ad_start_date IS NOT NULL;";
      const [result] = await conn.query(query);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  //시작기간 입력안된 (승인안된,유효하지않은) 광고
  getinValidAdlist: async () => {
    try {
      const conn = await pool.getConnection();
      const query = "SELECT * FROM ad_detail where ad_start_date = NULL;";
      const [result] = await conn.query(query);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  //승인하기
  acceptAd: async (ADNum) => {
    try {
      const conn = await pool.getConnection();
      const query = "UPDATE ad_detail set ad_start_date=NOW() where ad_detail_num=?;";
      const [result] = await conn.query(query,[ADNum]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },

};

