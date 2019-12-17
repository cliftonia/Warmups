// Switch up
// Write a function switchUp that takes a string as an argument and returns the string with the case for each letter switched e.g. lowercase letter must become uppercase and vice versa.

// switchUp("Switch caSe FoR eVery letter") --> // "sWITCH CAsE fOr EvERY LETTER"
// Extension
// If words are separated by spaces or underscores, change them to dashes. For example:

// Ruby
// str.swapcase.tr(" ", "-")

// spiner("js_Was_created_bY BRENdan Eich") --> // "JS-wAS-CREATED-By-brenDAN-eICH"
// Extension 2
// Same as above extension, but make it work for any special characters, not just spaces and underscores.

var patt = /" "/g

var switchUp = function (str) {
  var toArr = str.split("")
  var strArr = []
  toArr.forEach( function (char) {
    if (char == char.toLowerCase()) {
      strArr.push(char.toUpperCase())
    } else {
      strArr.push(char.toLowerCase())
    }
  })
  var changed = strArr.join("").replace(/[ ]/g, "_")
  // or 
  // var changed = strArr.join("").replace(/\s/g, "_")
  return changed
}
