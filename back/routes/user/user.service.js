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
  updateUser: (userInfo) => {},
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
};
