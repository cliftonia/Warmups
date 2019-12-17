// # Exam Results

// A group of students sitting exams every quarter score the following results throughout the year:
// ```

// ```
// Write the code to find:
// 1. How much Greg scored in their first Biology exam.
// 2. How much Sarah scored in their last Maths exam.
// 3. The highest score Thomas achieved in Maths throughout the year.
// 4. The quarter that Greg achieved his lowest score in Biology in the year.

// ### Extensions:
// 1. The average of Sarah's scores in Maths for the whole year.
// 2. Find which person scored the highest in Maths on average throughout the year.
// 3. Find which person failed the most exams overall (a fail is scoring below 50)

var exam_results = {
  Greg: {
    Biology: [90, 75, 23, 60],
    Maths: [100, 80, 30, 45]
  },
  Sarah: {
    Biology: [70, 65, 80, 95],
    Maths: [80, 77, 64, 90]
  },
  Thomas: {
    Biology: [40, 60, 75, 98],
    Maths: [36, 50, 67, 82]
  }
}

var sarahMathsArr = exam_results.Sarah.Maths
var sarahBioArr = exam_results.Sarah.Biology

var gregMathsArr = exam_results.Greg.Maths
var gregBioArr = exam_results.Greg.Biology

var thomasMathsArr = exam_results.Thomas.Maths
var thomasBioArr = exam_results.Greg.Biology

exam_results.Greg.Biology[0]

exam_results.Sarah.Maths[3]

function getMaxOfArray(numArray) {
   console.log(Math.max.apply(null, numArray));
}

var maxOfArr = function (arr) {
  console.log(arr.sort().reverse()[0])
}

maxOfArr(thomasMathsArr)

exam_results.Greg.Biology[2]



// find who has failed the most
var passCount = 0;
var failCount = 0;

var examResult = function (array1, array2) {
  array1.forEach( function (index1) {
    if (index1 < 50) {
      failCount = Number(failCount) + 1
    } else {
      passCount = Number(passCount) + 1
    }
  })
  array2.forEach( function (index2) {
    if (index2 < 50) {
      failCount = Number(failCount) + 1
    } else {
      passCount = Number(passCount) + 1
    }
  })
  console.log('you have failed ' + failCount + " times")
  console.log('you have passed ' + passCount + " times")
  passCount = 0;
  failCount = 0
}

// var examResult = function (array) {
//   array.forEach( function (index) {
//     if (index < 50) {
//       failCount = Number(failCount) + 1
//     } else {
//       passCount = Number(passCount) + 1
//     }
//   })
//   console.log('you have failed ' + failCount + " times")
//   console.log('you have passed ' + passCount + " times")
//   passCount = 0;
//   failCount = 0
// }

// finding the averages out 
var totalSarah = 0;
sarahMathsArr.forEach( function (score) {
  totalSarah += score
})
var sarahMathsAvg = Number((totalSarah / sarahMathsArr.length).toFixed(2));
console.log(sarahMathsAvg)

var totalGreg = 0;
gregMathsArr.forEach( function (score) {
  totalGreg += score
})
var gregMathsAvg = Number((totalGreg / gregMathsArr.length).toFixed(2));
console.log(gregMathsAvg)

var totalThomas = 0;
thomasMathsArr.forEach( function (score) {
  totalThomas += score
})
var thomasMathsAvg = Number((totalThomas / thomasMathsArr.length).toFixed(2));
console.log(thomasMathsAvg)

