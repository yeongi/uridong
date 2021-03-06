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
      const query = `select member.member_num,member.member_name,
      DATE_FORMAT(favorite.last_review_date,'%Y-%m-%d') as last_review_date
      , DATE_FORMAT(favorite.favorite_start_date,'%Y-%m-%d') as favorite_start_date ,TIMESTAMPDIFF(DAY,favorite_start_date, CURDATE()) as patron_day 
      from member inner join favorite on
      member.member_num= favorite.member_num where favorite.rst_num=? and favorite.patron_yn=1`;
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
    try {
      const conn = await pool.getConnection();
      const query = `
      select member.member_num,member.member_name, DATE_FORMAT(favorite.favorite_start_date,'%Y-%m-%d') as favorite_start_date ,TIMESTAMPDIFF(DAY,favorite_start_date, CURDATE()) as patron_day
      from member inner join favorite on member.member_num=favorite.member_num
      where favorite.rst_num=?`;

      const [result] = await conn.query(query, [rstnum]);
      console.log(result);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getOneMonthPatronList: async (rstnum) => {
    try {
      const conn = await pool.getConnection();
      const query = `
      select member.member_num,member.member_name,
      DATE_FORMAT(favorite.last_review_date,'%Y-%m-%d') as last_review_date
      , DATE_FORMAT(favorite.favorite_start_date,'%Y-%m-%d') as favorite_start_date ,TIMESTAMPDIFF(DAY,favorite_start_date, CURDATE()) as patron_day
      from member inner join favorite on member.member_num = favorite.member_num
      where rst_num=1 and last_review_date <= date_add(CURDATE(),interval -1 month) and  patron_yn=1;`;
      const [result] = await conn.query(query, [rstnum]);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  updateRsvFavNum: async (info) => {
    try {
      const { member_num, rst_num } = info;
      const conn = await pool.getConnection();
      const query = `UPDATE favorite set rsv_do_count = rsv_do_count + 1 WHERE member_num = ? AND rst_num = ?;`;
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
};
