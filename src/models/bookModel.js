const mongoose = require("mongoose");
const bookModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author_id: {
      type: Number,
      required: true,
    },
    prices: Number,
    rating: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookModel);
