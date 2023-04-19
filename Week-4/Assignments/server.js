import express from "express";
import accountRouter from "./routes/account.js";
import cookieParser from "cookie-parser";

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use("/", accountRouter);

app.get("/", function (req, res) {
  const username = req.cookies.username;
  res.render("home", { username });
});

app.get("/assignment1", function (req, res) {
  const username = req.cookies.username;
  res.render("assignment1", { username });
});

app.get("/assignment2", function (req, res) {
  const username = req.cookies.username;
  res.render("assignment2", { username });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
