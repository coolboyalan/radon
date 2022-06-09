const publisherModel = require("../models/publisherModel");

//PROBLEM2
const createPublisher = async (req, res) => {
  let publisher = req.body;
  if (typeof publisher.name != "string")
    return res.send({ msg: "Please check publisher name" });
  let publisherCreated = await publisherModel.create(publisher);
  res.send({ Publisher: publisherCreated });
};

module.exports.createPublisher = createPublisher;
