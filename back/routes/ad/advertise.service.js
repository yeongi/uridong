const pool = require("../../config/dbConfig");

module.exports = {
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
  getValidAd: async () => {},
  acceptAd: async (AdNum) => {},
};
