import express from "express";
import articleController from "../controller/articleController.js";
const router = express.Router();

router.get("/getArticles", articleController.getArticles);

router.post(
  "/getArticlesByUserAndId",
  articleController.getArticlesByUserAndId
);

export default router;
