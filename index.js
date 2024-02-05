const {addDays} = require('date-fns')

function date(days) {
  const newdate = addDays(new Date(2020, 8, 22), days)

  return `${newdate.getDate()}-${newdate.getMonth() + 1}-${newdate.getFullYear()}`
};

module.exports = date

console.log(date(15))
