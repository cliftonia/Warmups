// create 3 arrays
// put the arrays inside an array so i can loop through them 
// if a number is present in each array I want to push it into another array 
arr1 = [1,3,4,6,3,3,3,3,3,3]
arr2 = [2,3,4,7,3,3,3,3]
arr3 = [3,4,7,8,9,3,3,3,3]

// this is going through my duplicates Array and removing the duiplicates 
const removeDupiclates = (arr) => {return [...new Set(arr)];}

// this has 2 loops that that check for elements that are the same and then pushing them into a new array
const arrOfCommonElements = (arr) => {
  return arr.filter((a => b => a.has(b) || !a.add(b))(new Set)); 
}

const threeWayIntersection = (arr1,arr2,arr3) => {
  commonNumbersArr = []

  arr1.forEach(a => {
    arr2.forEach(b => {
      if (a === b) {
        commonNumbersArr.push(a)
      }
    })
  })

  commonNumbersArr.forEach(com => {
    arr3.forEach(c => {
      if (com === c) {
        commonNumbersArr.push(c)
      }
    })
  })

  return removeDupiclates(commonNumbersArr)

}

console.log(threeWayIntersection(arr1,arr2,arr3))

arraysOfNumbers = [[3,9,9], [6,8,9,9], [1,9,10,9], [9,9,11], [9,11,14,9]]

const nWayIntersection = (arrays) => {
  numbersArr = []
  
  arrays.forEach(arr => {
    arr.forEach(num => {
      numbersArr.push(num)
    })
  })
  
  const duplicatesArr = arrOfCommonElements(numbersArr)

  return removeDupiclates(duplicatesArr)

}

console.log(nWayIntersection(arraysOfNumbers))

