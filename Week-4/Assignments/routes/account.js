import express from "express";
import {
  getUsers,
  checkEmailExist,
  checkEmailPassword,
  addUser,
  removeUser,
} from "./database.js";

const router = express.Router();

router.get("/getUsers", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

router.post("/checkEmailExist", async (req, res) => {
  const { email } = req.body;
  const exist = await checkEmailExist(email);
  res.send(exist);
});
router.post("/checkEmailPassword", async (req, res) => {
  const { email, password } = req.body;
  const user = await checkEmailPassword(email, password);
  res.send(user);
});

router.post("/addUser", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.send({ error: "All fields are required" });
  } else {
    const user = await addUser(username, email, password);
    res.send(user);
  }
});

router.delete("/removeUser", async (req, res) => {
  const { id } = req.body;
  const result = await removeUser(id);
  res.send(result);
});

export default router;
