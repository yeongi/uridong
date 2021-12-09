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
  //시작기간 입력된 (승인된) 광고
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
  //승인하기
  acceptAd: async (AdNum) => {
    try {
      let { AdNum } = req.AdNum;
      const conn = await pool.getConnection();
      const query = "UPDATE ad_detail set ad_start_date ;";
      const [result] = await conn.query(query,[AdNum]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },

};

