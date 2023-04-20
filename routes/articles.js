import express from "express";
import { getArticles, getArticlesByUserAndId } from "../database/database.js";
const router = express.Router();

router.get("/getArticles", async (req, res) => {
  const results = await getArticles();
  res.json(results);
});

router.post("/getArticlesByUserAndId", async (req, res) => {
  const { username, lower, upper } = req.body;
  const results = await getArticlesByUserAndId(username, lower, upper);
  res.json(results);
});

export default router;
