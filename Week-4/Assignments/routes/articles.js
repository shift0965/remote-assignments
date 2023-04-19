import express from "express";
import {
  getArticles,
  getArticlesByUser,
  getArticlesById,
} from "../database/database.js";
const router = express.Router();

router.get("/getArticles", async (req, res) => {
  const results = await getArticles();
  res.json(results);
});

router.post("/getArticlesByUser", async (req, res) => {
  const username = req.body.username;
  console.log(username);
  const results = await getArticlesByUser(username);
  res.json(results);
});

router.post("/getArticlesById", async (req, res) => {
  const { lower, upper } = req.body;
  console.log(lower, upper);
  const results = await getArticlesById(lower, upper);
  res.json(results);
});

export default router;
