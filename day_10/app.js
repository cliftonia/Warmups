// Air Conditioning
// Part 1
// You've just bought a new air conditioner and it requires set-up. Do the following to set-up the air conditioner:

// Create an object called air_conditioner
// Provide it a max temperature property for the maximum desired temp you'd like to heat the room up to.
// Do the same with a min temperature property.
// Part 2
// Write a function that takes three arguments

// the room temperature.
// if the A/C is functional (turned on).
// the air conditioner object with the min and max properties you built in part 1.
// The function should exhibit the following behaviour:

// If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
// If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
// If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

var airconditioner = 
{
  max: 30,
  min: 18
}

airconditioner.max

var currentTemperature = 30;
var desiredTemperature = 21;
var airConOnSwitch = false

var airCon = function (functional, roomTemp, desiredTemp) {
  if (functional === true && roomTemp > desiredTemp) {
    console.log("Turn on the A/C Please")
  } else if (functional !== true && roomTemp > desiredTemp) {
    console.log("Fix the A/C now! It's hot!")
  } else if (functional !== true && roomTemp < desiredTemp) {
    console.log("Fix the A/C whenever you have the chance... It's cool...")
  } 
}


