const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnPerSec = turnsSpeed / 3600;
  let turns = Math.pow(2, disksNumber) - 1
  let hanoiObj = {
    turns: turns,
    seconds: Math.floor(turns / turnPerSec)
  }
  return hanoiObj
};