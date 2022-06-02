const today = new Date();
function printDate() {
  return console.log(today.getDate());
}
function printMonth() {
  return console.log(today.getMonth() + 1);
}
function getBatchInfo() {
  return console.log("Radon, W3D3, the topic for today is Nodejs module system");
}
const output = function final() {
  printDate();
  printMonth();
  getBatchInfo();
  return;
};

module.exports.second = output;
