import express from "express";
import accountRouter from "./routes/account.js";
import articlesRouter from "./routes/articles.js";
import cookieParser from "cookie-parser";

const port = process.env.PORT || 3000;

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use("/", accountRouter);
app.use("/", articlesRouter);

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

app.get("/assignment3", function (req, res) {
  const username = req.cookies.username;
  res.render("assignment3", { username });
});

app.listen(port, () => {
  console.log("Example app listening on port 3000!");
});
