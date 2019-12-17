var square = [4, 1, 16, 1, 10, 35, 22]

// let unique = [...new Set(square)].sort(function(a, b){return a-b}); 

function getUnique(array){
  var uniqueArray = [];
  
  // Loop through array values
  for(var value of array){
      if(uniqueArray.indexOf(value) === -1){
          uniqueArray.push(value);
      }
  }
  return uniqueArray.sort(function(a, b){return a-b});
}

getUnique(square)

// By default, the sort() method sorts the values as strings in alphabetical and ascending order.

getSquares = function (arr) {
  return arr.filter( n => )
}


// .filter() will go through an array and select only the items that are unique, its very similar to for forEach function 