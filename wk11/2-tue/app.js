// query string and params hash

// given the following sample query string
// ```
var qs = "?title=jaws&apikey=123456&page=5";

var queryStringToObject = string => {
  var results = {};
  var final = qs
    .slice(1)
    .split("&")
    .map(n => n.split("="));

  results[final[0][0]] = final[0][1];
  results[final[1][0]] = final[1][1];
  results[final[2][0]] = final[2][1];

  return results;
};

console.log(queryStringToObject(qs));

// var final = qs.split("&").map(n => n.split("="));

// console.log(results);

// var final = qs.join("").map(n => n.split("&"));

// console.log(final);

// www.omdbapi.com/?t=jaws&apikey=2f6435d9

// write a function that accepts a query string as an argument and returns a object

// ```
// queryStringToObject(qs)
// ```
// returns the following
// ```
// {
//   title: "jaws",
//   apikey: "123456",
//   page: "5"
// }
// ```

// you can do this in javascript or ruby
