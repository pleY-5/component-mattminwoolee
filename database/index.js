const { Pool } = require('pg');

const db = new Pool({
  user: process.env.PG_REMOTE_USER,
  host: process.env.PG_REMOTE_HOST,
  database: process.env.PG_REMOTE_DATABASE,
  password: process.env.PG_REMOTE_PASSWORD,
  port: process.env.PG_REMOTE_PORT,
});

db.connect((err) => {
  if (err) {
    throw err;
  }
});

module.exports.db = db;