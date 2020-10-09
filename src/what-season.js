module.exports = function getSeason(date) {
  let season;
  if (date === null) {
    throw new Error();
  } else if (!date) {
    return 'Unable to determine the time of year!';
  } else if (!(Object.prototype.toString.call(date) === '[object Date]')) {
    throw new Error();
  } else {
    let mouthOfDate = date.getMonth();
    if (mouthOfDate >= 2 && mouthOfDate < 5) {
      season = 'spring';
    } else if (mouthOfDate >= 5 && mouthOfDate < 8) {
      season = 'summer';
    } else if (mouthOfDate >= 8 && mouthOfDate <= 10) {
      season = 'autumn';
    } else {
      season = 'winter';
    }
  }
  return season;
};