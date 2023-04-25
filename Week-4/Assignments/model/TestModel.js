import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function withConn() {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    conn.query(
      "SELECT * FROM user WHERE username = ?",
      ["Leo"],
      (err, results) => {
        if (err) throw err;
        console.log(results);
        conn.release();
      }
    );
  });
}

withConn();
