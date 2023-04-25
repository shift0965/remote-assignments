import mysqldump from "mysqldump";
import dotenv from "dotenv";
dotenv.config();

mysqldump({
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  dumpToFile: "database/backup.sql",
})
  .then(() => console.log("Done"))
  .catch((err) => console.log(err));
