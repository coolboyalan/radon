const req = require("express/lib/request");
const moment = require("moment");

const timeStamp = moment().format("YYYY-MM-d hh:mm:ss");

const global = (req, res, next) => {
  console.log(timeStamp + ", " + req.ip + ", " + req.path);
  next();
};
module.exports.global = global;
