const CustomError = require("../extensions/custom-error");
module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw Error();
  }
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--double-next':
        if (i < arr.length - 1) {
          newArr.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (i > 0) {
          newArr.push(arr[i - 1]);
        }
        break;
      case '--discard-next':
        if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev') {
          i += 2;
        } else {
          i++;
        }
        break;
      case '--discard-prev':
        if (i > 0) {
          newArr.pop();
        }
        break;
        
      default:
        newArr.push(arr[i]);
        break
    }
  }
  return newArr;

  //   if (!Array.isArray(arr)) {
  //   throw Error();
  // }

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] == '--discard-prev') {
  //     if (i !== 0) {
  //       arr.splice(i, 1);
  //     } else {
  //       arr.shift();
  //     }
  //   } else if (arr[i] == '--double-prev') {
  //     if (i !== 0) {
  //       arr.splice(i - 1, 2, arr[(i - 1)]);
  //     } else {
  //       arr.shift();
  //     }
  //   } else if (arr[i] == '--double-next') {
  //     if (i !== arr.length - 1) {
  //       arr.splice(i - 1, 2, arr[(i + 1)]);
  //     } else if (i !== 0) {
  //       arr.pop();
  //     } else {
  //       arr.shift();
  //       arr.splice(0, 0, arr[(i + 1)]);
  //     }
  //   } else if (arr[i] == '--discard-next') {
  //     if (i !== arr.length - 1) {
  //       arr.splice(i - 1, 2);
  //     } else if (i !== 0){
  //       arr.pop();
  //     } else {
  //       arr.splice(0, 2);
  //     }
  //   }
  // }
  // return arr;
}
