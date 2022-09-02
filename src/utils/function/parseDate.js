function parseDate(str) {
  let mdy = str.split("-");
  mdy = [mdy[1], mdy[2], mdy[0]];
  return new Date(mdy[2], mdy[0] - 1, mdy[1]);
}

module.exports = parseDate;
