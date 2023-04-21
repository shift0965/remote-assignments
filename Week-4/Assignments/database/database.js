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

async function handleError(callback) {
  try {
    const db = await connectdb();
    const result = await callback(db);
    return result;
  } catch (err) {
    console.log(err);
    return { Error: err.code };
  }
}

//user tbale

export async function getUsers() {
  const result = await handleError(async (db) => {
    const [rows, field] = await db.execute("SELECT * FROM user;");
    const users = rows;
    return users;
  });
  return result;
}

export async function checkEmailExist(email) {
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

export async function checkEmailPassword(email, password) {
  const result = await handleError(async (db) => {
    const [rows, field] = await db.execute(
      "SELECT id, username FROM user WHERE email =? AND password =?",
      [email, password]
    );
    const user = rows[0];
    if (user) return { user };
    else return { user: null };
  });
  return result;
}

export async function addUser(username, email, password) {
  const result = await handleError(async (db) => {
    const [rows, field] = await db.execute(
      "INSERT INTO user (username, email, password) VALUES (?,?,?);",
      [username, email, password]
    );
    const id = rows.insertId;
    return { user: { id, username } };
  });
  return result;
}

export async function removeUser(id) {
  const result = await handleError(async (db) => {
    const [rows, field] = await db.execute("DELETE FROM user WHERE id=?", [id]);
    if (rows.affectedRows === 1) {
      return { userRemoved: true };
    } else {
      return { userRemoved: false };
    }
  });
  return result;
}

//articles table

export async function getArticles() {
  const result = await handleError(async (db) => {
    const [rows, field] = await db.execute(
      "SELECT articles.id, username, email, content FROM articles LEFT JOIN user ON articles.author_email = user.email ORDER BY username;"
    );
    return rows;
  });
  return result;
}

export async function getArticlesByUserAndId(
  username = "",
  lower = 0,
  upper = 99
) {
  const result = await handleError(async (db) => {
    const [rows, field] = await db.execute(
      `SELECT articles.id, username, email, content FROM 
        articles LEFT JOIN user ON articles.author_email = user.email 
        WHERE user.username LIKE ?
        ORDER BY articles.id
        LIMIT ? OFFSET ?;`,
      ["%" + username + "%", upper - lower, lower]
    );
    return rows;
  });
  return result;
}
