const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const mongoose = require("mongoose");
const checkId = mongoose.isValidObjectId;

const createUser = async function (req, res) {
  //PROBLEM1
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  //PROBLEM2
  let userName = req.body.emailId;
  let password = req.body.password;
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "Incorrect username/password",
    });
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "Radon",
      organisation: "FunctionUp",
    },
    "deepakSingh"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};

//PROBLEM3
const getUserData = async function (req, res) {
  let userId = req.params.userId;
  if (!checkId(userId)) return res.send({ msg: "Please check user id" });
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });
  res.send({ status: true, data: userDetails });
};

//PROBLEM4
const updateUser = async function (req, res) {
  let userId = req.params.userId;
  if (!checkId(userId)) return res.send({ msg: "Please check user id" });
  let userDetails = await userModel.findByIdAndUpdate(userId, req.body, {
    new: true,
  });
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });
  res.send({ status: true, data: userDetails });
};

//PROBLEM5
const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  if (!checkId(userId)) return res.send({ msg: "Please check user id" });
  let userDetails = await userModel.findByIdAndUpdate(
    userId,
    { isDeleted: true },
    { new: true }
  );
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });
  res.send({ status: true, data: userDetails });
};

module.exports = {
  createUser: createUser,
  loginUser: loginUser,
  getUserData: getUserData,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
