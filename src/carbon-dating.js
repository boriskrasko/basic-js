const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity) {
  let sample = Number.parseFloat(sampleActivity);
  if (typeof sampleActivity !== "string" || !sample || sample < 0 || sample > MODERN_ACTIVITY) {
    return false;
  }
  const k = 0.693/HALF_LIFE_PERIOD;
  let result =  Math.ceil(Math.log(MODERN_ACTIVITY/sample)/k);
  return result;
};
