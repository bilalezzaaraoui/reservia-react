const addOneAnotherDay = (date, numberOfDays) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numberOfDays);
  return newDate;
};

module.exports = addOneAnotherDay;
