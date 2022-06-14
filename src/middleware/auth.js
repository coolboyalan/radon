const jwt = require("jsonwebtoken")

const auth = async function (req, res, next) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "Token Missing" });

  let flow = false;
  jwt.verify(token, "deepakSingh", (err, payload) => {
    if (err) {
      flow = true;
      return res.send({ msg: err.message });
    }
  });
  if (flow) return;
  next()
};

module.exports.auth = auth