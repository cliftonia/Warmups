var arr = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]

// arr.forEach(a => {
//   if a
// })

// arr = arr.filter(num => )

// var oddOneOut = []
// var common = []

// if (arr.indexOf() && arr.lastIndexOf()) {

//   common.push(arr)
// } else {
//   oddOneOut.push(arr)
// }

// arr.forEach(num => {
//   if (arr.indexOf(num) > 0 && arr.lastIndexOf(num) > 0) {
//     console.log("yes")
//   }
// })

arr.forEach(num => {
  if (arr.indexOf(num) > 0 || arr.lastIndexOf(num)) {
    arr.pop(num)
  }
})

if arr.filter(num => num.length == 2)