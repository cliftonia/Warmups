// 1. The Age Calculator

// - Store the current year in a variable.
// - Store their birth year in a variable.
// - Calculate their 2 possible ages based on the stored values.
// - Output them to the screen like so: "you are either 18 or 19 years old"

var ageCalculator = (currentYear, birthYear) => {
  var age = currentYear - birthYear
  return `you are ${age} years old or ${age - 1} years old depending what month you are born in`
}

console.log(ageCalculator(2019, 1988))

// 2. for numbers between 1 and 200 print out multiples of 7.

var multiplesOfSeven = () => {
  for (let i = 1; i < 100; i++) {
    if (i % 7 === 0) {
      console.log(i)
    }
  }
}

multiplesOfSeven()

// 3. print out all the leap years in the last 100 years.

var leapYear = () => {
  for (let year = 1919; year < 2019; year++ ) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
      console.log(year)
    }
  }
}

leapYear()

// 4. for numbers between 100 and 200 print out every second odd number.

var oddNumbers = () => {
  for(let i = 100; i <= 200; i++) {
    if (i % 2 == 0) {
      console.log(i + 1)
    }
  }
}

oddNumbers()



