const productModel = require("../models/productModel");

const createProduct = async (req, res) => {
  let data = req.body;
  if (typeof(data.price) == "number" && typeof(data.name) == "string") {
    let product = await productModel.create(data);
    res.send({ msg: product });
  } else return res.send({ Message: "Please fill correct details" });
};

module.exports.createProduct = createProduct;
