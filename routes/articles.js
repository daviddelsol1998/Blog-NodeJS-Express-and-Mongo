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

router.get("/:id", async (req, res) => {
  const article = await articleModel.findById(req.params.id);
  if (article == null) { res.redirect('/') }
  res.render("articles/show", { article: article });
  // res.send(req.params.id)
});

router.post("/", async (req, res) => {
  let article = new articleModel({
    title: req.body.title,
    description: req.body.description,
    journal_entry: req.body.journal_entry,
  });
  try {
    article = await article.save();
    res.redirect(`/articles/${article.id}`);
  } catch (err) {
    console.log(err);
    res.render("articles/new", { article: article });
  }
});

module.exports = router;
