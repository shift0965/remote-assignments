import express from "express";
import UserController from "../controller/userController.js";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

router.get("/login", function (req, res) {
  const filePath = path.join(__dirname, "..", "public", "login.html");
  res.sendFile(filePath);
});

router.post("/checkEmailExist", UserController.checkEmailExist);

router.post("/checkEmailPassword", UserController.checkEmailPassword);

router.get("/user", UserController.user);

router.post("/addUser", UserController.addUser);

router.delete("/removeUser", UserController.removeUser);

router.get("/logout", UserController.logout);

//userPage
export default router;
