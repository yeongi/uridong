const { createPool } = require("mysql2/promise");

const dbInfo = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
};

const pool = createPool(dbInfo);

module.exports = pool;
