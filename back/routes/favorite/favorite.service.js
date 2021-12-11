const pool = require("../../config/dbConfig");

module.exports = {
  addFavorite: async (favInfo) => {
    try {
      const { member_num, rst_num } = favInfo;
      const conn = await pool.getConnection();
      const query = `INSERT INTO favorite (member_num, rst_num, favorite_start_date)
       VALUES (?,?,NOW());`;
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
  getPatronList: async (rstnum) => {
    try {
      const conn = await pool.getConnection();
      //즐겨찾기랑 멤버랑 조인
      //번호, 이름, 시작일자, 단골 일수, 최근 리뷰 작성 일자 날짜 형식
      const query = `select * from restaurant inner join favorite on
      restaurant.rst_num= favorite.rst_num where restaurant.rst_num=? and favorite.patron_yn=1`;
      const [result] = await conn.query(query, [rstnum]);
      console.log(result);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getFavMemList: async (rstnum) => {
    //즐겨찾기 한 멤버 전부
    //번호 이름, 즐겨찾기 시작일자, 단골 여부
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
