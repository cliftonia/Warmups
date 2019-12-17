// # Filter Out the Geese

// Write a function, `gooseFilter`, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' **removed**.

// The geese are any strings in the following array, which is pre-populated in your solution:<br>
// ```var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]```

// For example, if this array were passed as an argument:<br>
// ```["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]```

// Your function would return the following array:<br>
// ```["Mallard", "Hook Bill", "Crested", "Blue Swedish"]```

// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed.

var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

var birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]


// var gooseFilter = function (arr) {
//   geese.forEach(function (ge) {
//     for (let i = 0; i < arr.length; i++) {
//      result = arr.filter(ar => ar != ge);
//     }
//   })
//   return result
// }

var gooseFilter = function (arr) {
  geese.forEach(function (ge) {
    arr = arr.filter(ar => ar !== ge);
  })
  return arr
}

var arr_goosefilter = gooseFilter(birds)

console.log(arr_goosefilter)