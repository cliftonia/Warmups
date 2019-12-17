# Series Sum
Your task is to write a function which returns the sum of following series upto nth term(parameter).
```
Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
```
### Rules:
* You need to round the answer to 2 decimal places and return it as String.
* If the given value is 0 then it should return 0.00
* You will only be given Natural Numbers as arguments.

### Examples:
```
seriesSum(1) => 1 = "1.00"
seriesSum(2) => 1 + 1/4 = "1.25"
seriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
```

// var result = 0
// var realNum = 1;

// var seriesSum = function (num) {
//   for (var i = 0; i < num; i++) {
//     if (i===0) {
//       result = 1
//     } else {
//       realNum += 3
//       result = result + (1/realNum)
//     }
//   }
//   return result.toFixed(2);
// }

function SeriesSum(n){
  var total = 0;
  
  for (i = 0; i <= n; ++i){
    total = total + 1/(1 + i*3);
  }  
return total.toFixed(2);   
}
console.log(SeriesSum(1))
console.log(SeriesSum(2))
console.log(SeriesSum(3))
console.log(SeriesSum(4))