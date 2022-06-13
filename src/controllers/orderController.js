const userModel = require("../models/userModel");
const productModel = require("../models/productModel");
const orderModel = require("../models/orderModel");
const mongoose = require("mongoose");
const checkId = mongoose.isValidObjectId;

const newOrder = async (req, res) => {
  let data = req.body;
  let header = req.headers.isfreeappuser; //PROBLEM3
//   let header = req.body.isFreeAppUser //PROBLEM4
  if (!(checkId(data.userId) && (await userModel.findById(data.userId)))) {
    return res.send({ msg: "Please check user id" });
  }
  if (
    !(checkId(data.productId) && (await productModel.findById(data.productId)))
  ) {
    return res.send({ msg: "Please check product id" });
  }
  if (header == "true") {
    data.amount = 0;
    data.isFreeAppUser = true;
    let savedData = await orderModel.create(data);
    res.send(savedData);
  } else {
    let product = await productModel.findById(data.productId);
    let user = await userModel.findById(data.userId);
    if (user.balance < product.price) {
      return res.send({ msg: "Insufficient balance" });
    }
    let finalUser = await userModel.findByIdAndUpdate(
      data.userId,
      { $inc: { balance: -product.price } },
      { new: true }
    );
    data.amount = product.price
    let output = await orderModel.create(data);
    res.send({ "Order":output,"Updated User": finalUser });
  }
};

module.exports.newOrder = newOrder;
