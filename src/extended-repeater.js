const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = (options.repeatTimes) ? Number(options.repeatTimes) : 1;
    let separator = (options.separator) ? String(options.separator) : '+';
    let addition = (options.addition === undefined) ? '' : String(options.addition);
    let additionRepeatTimes = (options.additionRepeatTimes) ? Number(options.additionRepeatTimes) : 1;
    let additionSeparator = (options.additionSeparator) ? String(options.additionSeparator) : '|';
    let result = '';
    str = String(str);
    for (let i = 0; i < repeatTimes; i++) {
        result += str;
        for (let j = 0; j < additionRepeatTimes; j++) {
            result += addition;
            if (j + 1 < additionRepeatTimes) {
                result += additionSeparator;
            }
        }
        if (i + 1 < repeatTimes) {
            result += separator;
        }
    }
    return result;
};
  