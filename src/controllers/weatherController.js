const { default: axios } = require("axios");

//PROBLEM 2.1, 2.2
const weather = async (req, res) => {
  try {
    let place = req.query.place
    let key = req.query.key;
    let options = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`,
    };
    let result = await axios(options);
    let temp = result.data.main.temp;
    res.status(200).send({ [place]: temp });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: err.message });
  }
};

const citiesTemp = async (req, res) => {
  try {
    let cities = [
      "Bengaluru",
      "Mumbai",
      "Delhi",
      "Kolkata",
      "Chennai",
      "London",
      "Moscow",
    ];
    let key = req.query.key
    let result = []
    for(let city of cities){
      let options = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,
      };
      let output = await axios(options)
      let temp = output.data.main.temp
      result.push({city:city,temp:temp})
    }
    result.sort((a,b)=>a.temp-b.temp)
    res.status(200).send(result)
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message)
  }
};
module.exports.weather = weather;
module.exports.citiesTemp = citiesTemp;
