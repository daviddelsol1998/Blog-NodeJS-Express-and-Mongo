// setup server
const { urlencoded } = require("express");
const express = require("express");
const app = express();

// setup mongoose and mongodb
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog");

// setup view engine
app.set("view engine", "ejs");

// setup routes
const articlesRoute = require("./routes/articles");

// setup article model
articleModel = require("./models/article")

app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const articles = await articleModel.find().sort({date: 'desc'})
  res.render("articles/index", { articles: articles });
});

app.use("/articles", articlesRoute);

// setup port on 3000
app.listen(3000);
