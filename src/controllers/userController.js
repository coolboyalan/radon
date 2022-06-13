const userModel = require("../models/userModel");

const createUser = async (req, res) => {
  let data = req.body;
  if (!(typeof(data.name) == "string"))
    return res.send({ msg: "Please check the name field" });
  let savedData = await userModel.create(data);
  res.send({ User: savedData });
};

module.exports.createUser = createUser;
