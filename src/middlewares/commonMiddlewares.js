const checkHeader1 = async (req, res, next) => {
  let header = req.headers.isfreeappuser;
  if (!(header == "true" || header == "false"))
    return res.send({
      msg: "One of the header is either missing or incorrect",
    });
  next();
};

const checkHeader = async (req, res, next) => {
  let header = req.headers.isfreeappuser;
  if (!(header == "true" || header == "false"))
    return res.send({
      msg: "One of the header is either missing or incorrect",
    });
  req.body.isFreeAppUser = header
  next();
};
module.exports = {
    checkHeader:checkHeader,
}
