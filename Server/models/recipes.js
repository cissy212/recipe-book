const mongoose = require("mongoose");

const recipesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  steps: {
    type: [String],
    required: true,
  },
  ingredients: {
    type: [{}],
    required: true,
  },
});

module.exports = mongoose.model("Recipe", recipesSchema);
