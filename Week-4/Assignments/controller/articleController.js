import Article from "../model/articleModel.js";

const articleController = {
  async getArticles(req, res) {
    const results = await Article.getArticles();
    res.json(results);
  },

  async getArticlesByUserAndId(req, res) {
    const { username, lower, upper } = req.body;
    const results = await Article.getArticlesByUserAndId(
      username,
      lower,
      upper
    );
    res.json(results);
  },
};

export default articleController;
