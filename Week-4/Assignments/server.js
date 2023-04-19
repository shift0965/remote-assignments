import express from "express";
import accountRouter from "./routes/account.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use("/account", accountRouter);
app.use(express.static("public"));

app.get("/account", function (req, res) {
  const filePath = path.join(__dirname, "public", "login.html");
  res.sendFile(filePath);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
