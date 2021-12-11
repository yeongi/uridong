const { v4 } = require("uuid");
const pool = require("../../config/dbConfig");

module.exports = {
  getPlayList: async () => {
    try {
      const conn = await pool.getConnection();
      const query = "SELECT * FROM play;";
      const [result] = await conn.query(query);
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
      const { member_num} = member_num;
      const conn = await pool.getConnection();
      const query = `INSERT INTO member_play_history (play_num, member_num, play_date,end_date) 
      VALUES (1,?,NOW(),date_add(now(),interval 30 day));`;
      const [{ affectRows: result }] = await conn.query(query, [member_num]);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  insertWreview: async (member_num) => {
    //예약 활동 내역 추가
    try {
      const { member_num} = member_num;
      const conn = await pool.getConnection();
      const query = `INSERT INTO member_play_history (play_num, member_num, play_date,end_date) 
      VALUES (1,?,NOW(),date_add(now(),interval 30 day));`;
      const [{ affectRows: result }] = await conn.query(query, [member_num]);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  insertUcoupon: async (member_num) => {
    //예약 활동 내역 추가
    try {
      const { member_num} = member_num;
      const conn = await pool.getConnection();
      const query = `INSERT INTO member_play_history (play_num, member_num, play_date,end_date) 
      VALUES (1,?,NOW(),date_add(now(),interval 30 day));`;
      const [{ affectRows: result }] = await conn.query(query, [member_num]);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  insertRAd: async (member_num) => {
    //예약 활동 내역 추가
    try {
      const { member_num} = member_num;
      const conn = await pool.getConnection();
      const query = `INSERT INTO member_play_history (play_num, member_num, play_date,end_date) 
      VALUES (1,?,NOW(),date_add(now(),interval 30 day));`;
      const [{ affectRows: result }] = await conn.query(query, [member_num]);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  insertPcoupon: async (member_num) => {
    //예약 활동 내역 추가
    try {
      const { member_num} = member_num;
      const conn = await pool.getConnection();
      const query = `INSERT INTO member_play_history (play_num, member_num, play_date,end_date) 
      VALUES (1,?,NOW(),date_add(now(),interval 30 day));`;
      const [{ affectRows: result }] = await conn.query(query, [member_num]);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
