const jwt = require("jsonwebtoken");

const auth = async function (req, res, next) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "Token Missing" });

  jwt.verify(token, "deepakSingh", (err, payload) => {
    if (err) {
      return res.send({ msg: err.message });
    }
    if (payload.userId != req.params.userId) {
      return res.send({ msg: "You ain't authorized to perform this action" });
    }
    next();
  });
};

module.exports.auth = auth;
