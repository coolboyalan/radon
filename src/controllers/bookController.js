const bookModel = require("../models/bookModel");
const authorModel = require("../models/authorModel");
const { response } = require("express");

//PROBLEM1.1
const createBook = async (req, res) => {
  let data = req.body;
  if (await authorModel.findOne({ author_id: data.author_id })) {
    let output = await bookModel.create(data);
    res.send({ bookAdded: output });
  } else res.send({ msg: "Not a recognized author" });
};
//PROBLEM1.2
const createAuthor = async (req, res) => {
  let data = req.body;
  if (await authorModel.findOne({ author_id: data.author_id })) {
    let output = await authorModel.create(data);
    res.send({ authorAdded: output });
  } else res.send({ msg: "Not a recognized author" });
};
//PROBLEM2
const chetanBhagatBooks = async (req, res) => {
  let author = await authorModel.findOne({ author_name: "Chetan Bhagat" });
  let id = author.author_id;
  let output = await bookModel.find({ author_id: id });
  res.send(output);
};
//PROBLEM3
const updateBook = async (req, res) => {
  let book = await bookModel.findOneAndUpdate(
    { name: "Two States" },
    { $set: { price: 100 } },
    { new: true }
  );
  let id = book.author_id;
  let price = book.price;
  let output = await authorModel.findOne({ author_id: id });
  let author = output.author_name;
  res.send({ author: author, price: price });
};
//PROBLEM4
const authorName = async (req, res) => {
  let books = await bookModel.find({ price: { $gte: 50, $lte: 100 } });
  let result = [];
  books.forEach(async (book, index) => {
    let a = await authorModel.findOne({ author_id: book.author_id });
    result.push({ [book.name]: a.author_name });
    if (index == books.length - 1) res.send(result);
  });
};
//PROBLEM5
const booksByAuthorId = async (req, res) => {
  let bookId = req.params.authorId;
  let books = await bookModel.find({ author_id: bookId });
  let output = books.map((x) => x.name);
  res.send(output);
};
//PROBLEM6
const authorAbove50 = async (req, res) => {
  let book = await bookModel.find({ ratings: { $gt: 4 } });
  let bookId = book.map((x) => x.author_id);
  let author = await authorModel.find({ age: { $gt: 50 } });
  let authorId = author.map((x) => x.author_id);
  let authors = authorId.filter((x) => bookId.includes(x));
  let result = [];
  authors.forEach(async (x, index) => {
    let y = await authorModel.findOne({ author_id: x });
    result.push({"name":y.author_name,"age":y.age});
    if (index == authors.length - 1) res.send({ Authors: result });
  });
};
module.exports = {
  createBook: createBook,
  createAuthor: createAuthor,
  chetanBhagatBooks: chetanBhagatBooks,
  updateBook: updateBook,
  authorName: authorName,
  booksByAuthorId: booksByAuthorId,
  authorAbove50: authorAbove50,
};
