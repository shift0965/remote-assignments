import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

async function connectdb() {
  const connection = await mysql
    .createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    })
    .promise();
  return connection;
}

async function handleError(callback) {
  try {
    const connection = await connectdb();
    const result = await callback(connection);
    connection.close();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

//user table
class User {
  async getUsers() {
    const result = await handleError(async (db) => {
      const [rows, field] = await db.execute("SELECT * FROM user;");
      const users = rows;
      return users;
    });
    return result;
  }

  async checkEmailExist(email) {
    const result = await handleError(async (db) => {
      const [rows, field] = await db.execute(
        "SELECT id FROM user WHERE email =?",
        [email]
      );
      if (rows.length > 0) return { exist: true };
      else return { exist: false };
    });
    return result;
  }

  async checkEmailPassword(email, password) {
    const result = await handleError(async (db) => {
      const [rows, field] = await db.execute(
        "SELECT id, username, email FROM user WHERE email =? AND password =?",
        [email, password]
      );
      const user = rows[0];
      if (user) return { user };
      else return { user: null };
    });
    return result;
  }

  async addUser(username, email, password) {
    const result = await handleError(async (db) => {
      const [rows, field] = await db.execute(
        "INSERT INTO user (username, email, password) VALUES (?,?,?);",
        [username, email, password]
      );
      const id = rows.insertId;
      return { user: { id, username, email } };
    });
    return result;
  }

  async removeUser(id) {
    const result = await handleError(async (db) => {
      const [rows, field] = await db.execute("DELETE FROM user WHERE id=?", [
        id,
      ]);
      if (rows.affectedRows === 1) {
        return { userRemoved: true };
      } else {
        return { userRemoved: false };
      }
    });
    return result;
  }
}

export default new User();
