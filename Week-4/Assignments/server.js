import express from "express";
import accountRouter from "./routes/account.js";
import articlesRouter from "./routes/articles.js";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

const sessionMiddleware = session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: false,
});

app.use(sessionMiddleware);
app.use("/", accountRouter);
app.use("/", articlesRouter);

app.get("/", function (req, res) {
  if (req.session.authorized) {
    const { username } = req.session.user;
    res.render("home", { username });
  } else {
    res.render("home", { username: null });
  }
});

app.get("/assignment1", function (req, res) {
  if (req.session.authorized) {
    const { username } = req.session.user;
    res.render("assignment1", { username });
  } else {
    res.render("assignment1", { username: null });
  }
});

app.get("/assignment2", function (req, res) {
  if (req.session.authorized) {
    const { username } = req.session.user;
    res.render("assignment2", { username });
  } else {
    res.render("assignment2", { username: null });
  }
});

app.get("/assignment3", function (req, res) {
  if (req.session.authorized) {
    const { username } = req.session.user;
    res.render("assignment3", { username });
  } else {
    res.render("assignment3", { username: null });
  }
});

/* 404 handler */
app.use((req, res, next) => {
  //console.log("404 error handler");
  const error = new Error();
  throw error;
  res.status(404).render("notFound");
});

/* Global error handler */
app.use((err, req, res, next) => {
  err.message = err.message || "Oops! It looks like there was a problem";
  res.status(err.status || 500).render("error", { err });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
