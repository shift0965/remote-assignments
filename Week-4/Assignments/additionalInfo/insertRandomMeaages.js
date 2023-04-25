import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const query = `INSERT INTO articles (author_email, content) VALUES
("paul@ee.com", "Want to grab a drink after work today?"),
("leo@ee.com", "Thank you for always being there for me."),
("amy@mail.com", "I have a surprise for you, meet me at the park at 6 pm."),
("jack@mail.com", "Did you hear about the new company that just launched?"),
("join@yo.com", "Let's plan a trip together soon."),
("paul@ee.com", "Good luck on your exam today!"),
("leo@ee.com", "I miss you, we should hang out soon."),
("amy@mail.com", "Have you tried the new ice cream place in the neighborhood?"),
("jack@mail.com", "I'm thinking about trying a new hobby, any suggestions?"),
("join@yo.com", "Congratulations on your new job!"),
("paul@ee.com", "How was your weekend? Do anything fun?"),
("leo@ee.com", "Just a quick reminder that our meeting is at 3 pm today."),
("amy@mail.com", "Can you believe it's already been a year since we met?"),
("jack@mail.com", "Let's go on a hike this weekend, are you free?"),
("jack@mail.com", "Thank you for always making me smile."),
("join@yo.com", "I am so excited for the concert this weekend!"),
("paul@ee.com", "Have a great day and talk to you soon!");
`;

async function connectdb() {
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

const connection = await connectdb();
const [rows, field] = await connection.execute(query);
console.log(rows);
