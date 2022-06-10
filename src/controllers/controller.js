const apiOne = async (req, res) => {
  res.send({ apiOne: "Check result on console" });
};
const apiTwo = async (req, res) => {
  res.send({ apiTwo: "Check result on console" });
};
const apiThree = async (req, res) => {
  res.send({ apiThree: "Check result on console" });
};

module.exports = {
  apiOne: apiOne,
  apiTwo: apiTwo,
  apiThree: apiThree,
};
