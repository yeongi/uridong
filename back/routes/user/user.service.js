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
                memeber_email,
                member_id,
                memeber_pw,
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
  updateUser: (userInfo) => {},
  deleteUser: (userInfo) => {},
};
