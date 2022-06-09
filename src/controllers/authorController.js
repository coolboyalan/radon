const authorModel = require("../models/authorModel");

//PROBLEM1
const createAuthor = async (req, res) => {
  let author = req.body;
  if (typeof author.authorName != "string")
    return res.send({ msg: "Please check author name" });
  let authorCreated = await authorModel.create(author);
  res.send({ Author: authorCreated });
};

module.exports.createAuthor = createAuthor;
