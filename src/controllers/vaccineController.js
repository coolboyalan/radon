const axios = require("axios");

//PROBLEM1
const findByDistrict = async (req, res) => {
  try {
    let id = req.query.district;
    let date = req.query.date;
    let options = {
      method: "get",
      url: `http://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`,
    };
    let result = await axios(options);
    res.status(200).send({ data: result.data });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: err.message });
  }
};

module.exports.findByDistrict = findByDistrict;
