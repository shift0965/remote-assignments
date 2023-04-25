import express from "express";
import User from "../model/userModel.js";
const router = express.Router();

router.get("/getArticles", async (req, res) => {
  const results = await User.getArticles();
  res.json(results);
});

router.post("/getArticlesByUserAndId", async (req, res) => {
  const { username, lower, upper } = req.body;
  const results = await User.getArticlesByUserAndId(username, lower, upper);
  res.json(results);
});

export default router;
