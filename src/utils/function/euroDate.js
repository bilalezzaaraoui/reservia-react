const euroDate = (date) => {
  const euro = date.split("-");
  return `${euro[2]}/${euro[1]}/${euro[0]}`;
};

module.exports = euroDate;
