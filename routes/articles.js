// setup routers

const express = require("express");
const router = express.Router();

// setup model
const articleModel = require("./../models/article");

//setup routes
router.get("/", (req, res) => {
  res.render("articles");
});

router.get("/new", (req, res) => {
  res.render("articles/new", { article: new articleModel() });
});

router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

router.post("/", async (req, res) => {
  let article = new articleModel({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
  });
  try {
    article = await article.save();
    res.redirect(`/articles/${article.id}`);
  } catch (err) {
    console.log(err);
    res.render("articles/new", { article: article});
  }
});

module.exports = router;
