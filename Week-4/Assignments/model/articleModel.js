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

class Article {
  async getArticles() {
    const result = await handleError(async (db) => {
      const [rows, field] = await db.execute(
        "SELECT articles.id, username, email, content FROM articles LEFT JOIN user ON articles.author_email = user.email ORDER BY username;"
      );
      return rows;
    });
    return result;
  }

  async getArticlesByUserAndId(username = "", lower = 0, upper = 99) {
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
}

export default new Article();
