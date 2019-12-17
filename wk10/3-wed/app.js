/*

Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.

Examples:

makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].

*/

// const makeFriendlyDates = integerDate => {
//   stringDate = []

// }


const daysCreate = () => {
  for (let i = 4; i <= 31; i++) {
    days.push(i + "th")
  }
}

days = ['1st', '2nd', '3rd']

daysCreate()

var months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
  ];

var date = ['2016-07-01']

newDate = date.join().split('-')

newDateIntegers = []

fruits.indexOf("Apple");

newDate.forEach(string => {
  newDateIntegers.push(Number(string))
})

stringDate = []

months.forEach(month => {
  if (months.indexOf(month) +1 === newDateIntegers[1]) {
    stringDate.push(month)
  }
})

days.forEach(day => {
  if (days.indexOf(day) +1 === newDateIntegers[2])
    stringDate.push(day)
})

stringDate.push(newDateIntegers[0])

const makeFriendlyDates = date => {
  newDate = date.join().split('-')
}


// create if statements to convert numbers into words
