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
  getpatronList: async (rstnum) => {
    try {
      const conn = await pool.getConnection();
      const query = `select * form restaurant inner join favorite on restaurant.rst_num= favorite.rst_num where restaurant.rst_num=? and favorite.patron_yn=true`;
      const [{ affectRows: result }] = await conn.query(query, [rstnum]);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getOneMonthpatronList: async (rstnum) => {
    try {
      const conn = await pool.getConnection();
      const query = `select member_name, member_email
      from member inner join favorite on member.member_num = favorite.member_num
      where rst_num=? and last_review_date >= date_add(now(),interval -1 month) 
      and patron_yn=true;`;
      const [{ affectRows: result }] = await conn.query(query, [rstnum]);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
