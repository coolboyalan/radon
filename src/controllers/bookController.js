const bookModel = require("../models/bookModel");
const authorModel = require("../models/authorModel");
const publisherModel = require("../models/publisherModel");
const { default: mongoose } = require("mongoose");

//PROBLEM3 WITHOUT USING NESTED IF ELSE
const createBook = async (req, res) => {
  let checkId = mongoose.isValidObjectId;
  let input = req.body;
  if (typeof(input.name) !== "string")
    return res.send({ Message: "Check the name field" });
  if (!(input.author && input.publisher))
    return res.send({ Error: "Please fill all the necessary details" });
  if (!(checkId(input.author) && (await authorModel.findById(input.author))))
    return res.send({ Messsage: "Please check author id" });
  if (!(checkId(input.publisher) && (await publisherModel.findById(input.publisher))))
    return res.send({ Messsage: "Please check publisher id" });
  let output = await bookModel.create(input);
  return res.send({ Book: output });
};
//PROBLEM3 USING NESTED IF ELSE
// const createBook = async (req, res) => {
//   let checkId = mongoose.isValidObjectId;
//   let input = req.body;
//   if (typeof(input.name) !== "string")
//     return res.send({ Message: "Check the name field" });
//   if (input.author && input.publisher) {
//     if (checkId(input.author) && (await authorModel.findById(input.author))) {
//       if (
//         checkId(input.publisher) &&
//         (await publisherModel.findById(input.publisher))
//       ) {
//         let output = await bookModel.create(input);
//         res.send({ Book: output });
//       } else return res.send({ Messsage: "Please check publisher id" });
//     } else return res.send({ Messsage: "Please check author id" });
//   } else return res.send({ Error: "Please fill all the necessary details" });
// };

//PROBLEM4
const getAllBooks = async (req, res) => {
  let data = await bookModel.find().populate(["author", "publisher"]);
  res.send({ msg: data });
};

//PROBLEM5
const books = async (req, res) => {
  let data = await bookModel.find().populate(["publisher", "author"]);
  let pubs = data.filter(
    (x) => x.publisher.name == "Penguin" || x.publisher.name == "HarperCollins"
  );
  pubs.forEach(async (x) => {
    let y = await bookModel.findOneAndUpdate(
      { _id: x._id },
      { $set: { isHardCover: true } },
      { new: true }
    );
  });
  let auths = data.filter((x) => x.author.rating > 3.5);
  auths.map(async (x) => {
    await bookModel.findOneAndUpdate({ _id: x._id }, { $inc: { price: 10 } }),
      { new: true };
  });
  res.send({ Message: "UpdatesDone" });
};

module.exports = {
  createBook: createBook,
  getAllBooks: getAllBooks,
  books: books,
};
