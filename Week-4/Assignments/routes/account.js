import express from "express";
import User from "../model/userModel.js";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

router.get("/login", function (req, res) {
  const filePath = path.join(__dirname, "..", "public", "login.html");
  res.sendFile(filePath);
});

router.post("/checkEmailExist", async (req, res) => {
  const { email } = req.body;
  const result = await User.checkEmailExist(email);
  res.send(result);
});

router.post("/checkEmailPassword", async (req, res) => {
  const { email, password } = req.body;
  const { user } = await User.checkEmailPassword(email, password);
  if (user) {
    req.session.authorized = true;
    req.session.user = user;
    const { username } = req.session.user;
    res.status(200).redirect("/user");
  } else {
    res.status(401).json({ message: "Password is incorrect" });
  }
});

router.get("/user", function (req, res) {
  const { username } = req.session.user;
  res.render("user", { username });
});

router.get("/getUsers", async (req, res) => {
  const users = await User.getUsers();
  res.send(users);
});

router.post("/addUser", async (req, res) => {
  const { userName, email, password } = req.body;
  const user = await User.addUser(userName, email, password);
  req.session.authorized = true;
  req.session.user = user;
  res.status(200).redirect("/user");
});

router.delete("/removeUser", async (req, res) => {
  const { id } = res.session.user;
  const result = await User.removeUser(id);
  res.redirect("/logout");
});

router.get("/logout", function (req, res) {
  req.session.destroy(null);
  res.redirect("/");
});

//userPage
export default router;
