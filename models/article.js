const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    type: String,
  },
  journal_entry: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Article", articleSchema);
