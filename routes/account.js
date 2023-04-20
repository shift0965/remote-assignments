import express from "express";
import {
  getUsers,
  checkEmailExist,
  checkEmailPassword,
  addUser,
  removeUser,
} from "../database/database.js";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

router.get("/login", function (req, res) {
  const filePath = path.join(__dirname, "..", "public", "login.html");
  res.sendFile(filePath);
});

router.post("/loginSuccess", function (req, res) {
  const { id, username } = req.body;
  res.cookie("id", id);
  res.cookie("username", username);
  res.status(302).redirect("/user");
});

router.get("/user", function (req, res) {
  const { username, id } = req.cookies;
  res.render("user", { username });
});

router.get("/getUsers", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

router.post("/checkEmailExist", async (req, res) => {
  const { email } = req.body;
  const result = await checkEmailExist(email);
  res.send(result);
});
router.post("/checkEmailPassword", async (req, res) => {
  const { email, password } = req.body;
  const user = await checkEmailPassword(email, password);
  res.send(user);
});

router.post("/addUser", async (req, res) => {
  const { userName, email, password } = req.body;
  const user = await addUser(userName, email, password);
  res.send(user);
});

router.delete("/removeUser", async (req, res) => {
  const { id } = req.cookies;
  const result = await removeUser(id);
  res.redirect("/logout");
});

router.get("/logout", function (req, res) {
  res.clearCookie("id");
  res.clearCookie("username");
  res.redirect("/");
});

//userPage
export default router;
