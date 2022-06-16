const jwt = require("jsonwebtoken");

const auth = async function (req, res, next) {
  try {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token)
      return res.status(401).send({ status: false, msg: "Token Missing" });
    
    jwt.verify(token, "deepakSingh", (err, payload) => {
      if (err) {
        return res.status(401).send({ msg: err.message });
      }
      if (payload.userId != req.params.userId) {
        return res
          .status(403)
          .send({ msg: "You ain't authorized to perform this action" });
      }
      next();
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ error: err.message });
  }
};

module.exports.auth = auth;
