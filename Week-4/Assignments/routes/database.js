import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

export async function connectdb() {
  try {
    const db = await mysql
      .createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      })
      .promise();
    return db;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function getUsers() {
  try {
    const db = await connectdb();
    const [rows, field] = await db.execute("SELECT * FROM user;");
    const users = rows;
    return users;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function checkEmailExist(email) {
  try {
    const db = await connectdb();
    const [rows, field] = await db.execute(
      "SELECT id FROM user WHERE email =?",
      [email]
    );
    const user = { rows };
    if (user.length > 0) return { exist: true };
    else return { exist: false };
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function checkEmailPassword(email, password) {
  try {
    const db = await connectdb();
    const [rows, field] = await db.execute(
      "SELECT id, username FROM user WHERE email =? AND password =?",
      [email, password]
    );
    const user = rows[0];
    return user;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function addUser(username, email, password) {
  try {
    const db = await connectdb();
    const [rows, field] = await db.execute(
      "INSERT INTO user (username, email, password) VALUES (?,?,?);",
      [username, email, password]
    );
    const id = rows.insertId;
    return { id, username };
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function removeUser(id) {
  try {
    const db = await connectdb();
    const [rows, field] = await db.execute("DELETE FROM user WHERE id=?", [id]);
    if (rows.affectedRows === 1) {
      return { userRemoved: true };
    } else {
      return { userRemoved: false };
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}
