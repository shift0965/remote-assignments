const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
router.use(cookieParser());

router.get("/myName", (req, res) => {
  const { name } = req.cookies;
  res.render("myName", { name });
});

router.get("/removeName", (req, res) => {
  res.clearCookie("name");
  res.redirect("/myName");
});

router.get("/trackName", (req, res) => {
  const { name } = req.query;
  res.cookie("name", name);
  res.redirect("/myName");
});

module.exports = router;
