const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const mongoose = require("mongoose");
const checkId = mongoose.isValidObjectId;

const createUser = async function (req, res) {
  //PROBLEM1
  try {
    let data = req.body;
    if (Object.keys(data).length == 0)
      return res.status(400).send({ msg: "Please send the correct input" });
    let savedData = await userModel.create(data);
    res.status(201).send({ msg: savedData });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ msg: error.message });
  }
};

const loginUser = async function (req, res) {
  //PROBLEM2
  try {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({
      emailId: userName,
      password: password,
    });
    if (!user)
      return res.status(401).send({
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
    res.status(200).send({ status: true, token: token });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ msg: error.message });
  }
};

//PROBLEM3
const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    if (!checkId(userId))
      return res.status(401).send({ msg: "Please check user id" });
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res
        .status(401)
        .send({ status: false, msg: "No such user exists" });
    res.status(200).send({ status: true, data: userDetails });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ msg: error.message });
  }
};

//PROBLEM4
const updateUser = async function (req, res) {
  try {
    let data = req.body;
    let userId = req.params.userId;
    if (!checkId(userId))
      return res.status(401).send({ msg: "Please check user id" });
    if (Object.keys(data).length == 0)
      return res.status(400).send({ msg: "Please send the correct input" });
    let userDetails = await userModel.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    if (!userDetails)
      return res
        .stauts(401)
        .send({ status: false, msg: "No such user exists" });
    res.status(200).send({ status: true, data: userDetails });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ msg: error.message })
  }
};

//PROBLEM5
const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    if (!checkId(userId))
      return res.status(401).send({ msg: "Please check user id" });
    let userDetails = await userModel.findByIdAndUpdate(
      userId,
      { isDeleted: true },
      { new: true }
    );
    if (!userDetails)
      return res
        .status(401)
        .send({ status: false, msg: "No such user exists" });
    res.status(200).send({ status: true, data: userDetails });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ msg: error.message });
  }
};

module.exports = {
  createUser: createUser,
  loginUser: loginUser,
  getUserData: getUserData,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
