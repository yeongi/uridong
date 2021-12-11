const { v4 } = require("uuid");
const pool = require("../../config/dbConfig");

module.exports = {
  addFavorite: async (favInfo) => {
    try {
      const { member_num, rst_num } = favInfo;
      const conn = await pool.getConnection();
      const query = `INSERT INTO favorite (member_num, rst_num, favorite_start_date) VALUES (?,?,NOW());`;
      const [{ affectRows: result }] = await conn.query(query, [
        member_num,
        rst_num,
      ]);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  insertRsv: async (member_num) => {
    //예약 활동 내역 추가
    try {
      const { member_num, rst_num } = favInfo;
      const conn = await pool.getConnection();
      const query = `INSERT INTO member_play_history (play_num, member_num, play_date,end_date) 
      VALUES (1,?,NOW(),NOW()+30일);`;
      const [{ affectRows: result }] = await conn.query(query, [member_num]);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
