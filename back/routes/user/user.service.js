const e = require("express");
const { v4 } = require("uuid");
const pool = require("../../config/dbConfig");
module.exports = {
  insertUser: async (userInfo) => {
    try {
      const { phone, name, email, id, pw, area } = userInfo;
      const conn = await pool.getConnection();
      const query = `INSERT INTO member 
            (
                member_call_num,
                member_name,
                member_email,
                member_id,
                member_pw,
                like_area
                ) VALUES (
                    ?,
                    ?,
                    ?,
                    ?,
                    ?,
                    ?
                );`;
      const [{ affectRows: result }] = await conn.query(query, [
        phone,
        name,
        email,
        id,
        pw,
        area,
      ]);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getUserList: async () => {
    try {
      const conn = await pool.getConnection();
      const query = "SELECT * FROM member;";
      const [result] = await conn.query(query);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },

  getMyInfo: async (userNum) => {
    try {
      const conn = await pool.getConnection();
      const query = "SELECT * FROM member where member_num = ?;";
      const [result] = await conn.query(query, [userNum]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },

  getMyFavorite: async (userNum) => {
    try {
      const conn = await pool.getConnection(); //식당과 조인하여 식당명 가져오기
      const query = "SELECT * FROM favorite where member_num = ?;";
      const [result] = await conn.query(query, [userNum]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },

  getMyPlay: async (userNum) => {
    try {
      const conn = await pool.getConnection(); //활동과 조인해서 활동명과 활동점수도 추가함
      const query = `SELECT m.member_num, m.play_date, m.end_date, p.score, p.play_text
      FROM member_play_history as m  join play as p on m.play_num = p.play_num
      where m.member_num = ?; `;
      const [result] = await conn.query(query, [userNum]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },

  getMyRst: async (userNum) => {
    try {
      const conn = await pool.getConnection();
      const query =
        "SELECT rst_num, rst_name, rst_address, rst_regist_date FROM restaurant where seller_member_num = ?;";
      const [result] = await conn.query(query, [userNum]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },

  updateLoginDate: async (userInfo) => {
    try {
      const conn = await pool.getConnection();
      const query = `UPDATE member SET last_login = noW() WHERE member_num=?;`;
      const [result] = await conn.query(query, [userInfo]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },

  deleteUser: (userInfo) => {},

  checkUser: async (userInfo) => {
    try {
      console.log(userInfo);
      const { id, pw } = userInfo;
      const conn = await pool.getConnection();
      const query = "select * from member where member_id = ?;";
      // const [{ affectRows: result }] = await conn.query(query, [id]);
      const [result] = await conn.query(query, [id]);
      conn.release();
      const { member_pw } = result[0];
      if (member_pw === pw) {
        return result[0];
      } else {
        return 0;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  //회원이 얻을 수 있는 활동 점수리스트
  getPlayList: async () => {
    try {
      const conn = await pool.getConnection();
      const query = "SELECT * FROM play where target_devision = 'member'";
      const [result] = await conn.query(query);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  //상위 ?퍼센트
  getRate: async (userNum) => {
    try {
      console.log(userNum);
      const conn = await pool.getConnection();
      const query = `
      SELECT * , (rank/@ALL)*100 AS percent FROM (
      SELECT * , ( @rank := @rank + 1 ) AS rank FROM(
      SELECT a.member_num, SUM(p.score) AS sum_score 
      FROM( member AS a INNER JOIN 
      (play AS p INNER JOIN member_play_history AS m ON p.play_num = m.play_num) 
      ON a.member_num = m.member_num, 
      (SELECT @rank := 0) AS d, 
      (SELECT @ALL := count(DISTINCT member_num) from member_play_history) AS f ) 
      WHERE m.end_date >= DATE_ADD(NOW() , INTERVAL 10 DAY) GROUP BY a.member_num 
      ORDER BY sum_score DESC
      )member_score_sum)member_ranking where member_num=? GROUP BY member_num ORDER BY rank ;
      `;
      const [result] = await conn.query(query, [userNum]);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  insertNoScore: async () => {
    try {
      //모든 회원한테 다 넣어야함
      const conn = await pool.getConnection();
      const query = `INSERT INTO notification
            (
              member_num,
              NO_content,
              content_devision,
              read_YN
                ) VALUES (
                    ?,
                    ?,
                    ?,
                    ?
                );`;
      const [{ affectRows: result }] = await conn.query(query, [
        11,
        "10일 뒤 우수회원 정산일입니다. 본인의 점수 및 백분위를 확인하세요!",
        "점수",
        0,
      ]);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  insertNoCoupon: async (noInfo) => {
    try {
      const { member_num, coupon_num } = noInfo;
      const conn = await pool.getConnection();
      const query = `INSERT INTO notification
            (
              member_num,
              coupon_num,
              NO_content,
              content_devision,
              read_YN
                ) VALUES (
                    ?,
                    ?,
                    ?,
                    ?,
                    ?
                );`;
      const [{ affectRows: result }] = await conn.query(query, [
        member_num,
        coupon_num,
        "쿠폰이 도착했습니다! 확인하세요!",
        "쿠폰",
        0,
      ]);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getMyNotice: async (userNum) => {
    try {
      console.log(userNum);
      const conn = await pool.getConnection();
      const query = `select * from notification where member_num=? and read_YN=0`;
      const [result] = await conn.query(query, [userNum]);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  acceptNoRead: async (NoNum) => {
    try {
      console.log(NoNum);
      const conn = await pool.getConnection();
      const query = `UPDATE notification set read_YN = 1 where No_num=?;`;
      const [result] = await conn.query(query, [NoNum]);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
