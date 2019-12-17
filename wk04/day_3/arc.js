// # Time to fool some archaeologists

// You are a villain trying to trap an adventuring archaeologist. Write a function 'makeFakeMap' that takes two numbers as arguments and returns an array of arrays to represent a map. It should be filled with the 'A' character, except for one, which should be an uppercase X(as below). The position of X should be determined randomly.

// ```javascript

var fakeMap = [
  []
]

var makeFakeMap = function (num1, num2) {
  if (num1 === 5 && num2 === 5) {
    fakeMap = [
      ["A","A","A","A","A"],
      ["A","A","A","A","A"],
      ["A","A","A","A","A"],
      ["A","A","A","A","A"],
      ["A","A","A","A","A"]
      ];
    fakeMap[Math.floor(Math.random()*fakeMap.length)][Math.floor(Math.random()*fakeMap.length)] = 'X'
  }
}

makeFakeMap(5,5);

var fakeMap = [
  []
]

var makeFakeMap = function (num1, num2, region, size,) {
  if (num1 === 5 && num2 === 5) {
    for (var i = 0; i < 5; i++) {
      fakeMap[0].push('A')
      fakeMap[1] = []
      for (var c = 0; c < 5; c++ ) {
        fakeMap[1].push('A')
        fakeMap[2] = []
        for (var d = 0; d < 5; d++) {
          fakeMap[2].push('A')
          fakeMap[3] = []
          for (var e = 0; e < 5; e++) {
            fakeMap[3].push('A')
            fakeMap[4] = []
            for (var f = 0; f < 5; f++) {
              fakeMap[4].push('A')
            }
          }
        }
      }
    }
  }
  if (num2 === 5) {
    fakeMap[Math.floor(Math.random()*5)][Math.floor(Math.random()*5)] = 'X'
    }
  }

makeFakeMap(5,5);

// var makeFakeMap = function (num1, num2) {
//   for (var i = 0; i < 5; i++) {
//     fakeMap[0].push('A')
//     fakeMap[1] = []
//     for (var c = 0; c < 5; c++ ) {
//       fakeMap[1].push(a)
//     }
//   }
//   for (var x = 0; x < 1; x++) {
//     fakeMap[0].push('X')
//   }
// }

// // Sample outputs:

[
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];

// makeFakeMap(5, 5);

// [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","X"],
// ["A","A","A","A","A"]
// ];

// makeFakeMap(5, 5);

// [
// ["A","A","A","A","A"],
// ["A","A","A","X","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ];

// ```

// ### Bonus 1

// Modify your function to take a third key argument and generate maps with a single key character inserted randomly. 

// ```javascript

// //bonus output:

// makeFakeMap(5, 5, 'F');

// [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","F","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ];

// ```


// ### Bonus 2

// Modify your function to generate maps with 'regions' that you can control. The regions you should support are below:

// F: generate a forest
// W: generate a body of water
// D: generate a desert region

// The argument after the region should be the size of that region. For example, region size 2 would make a 2x2 region within your map (placed randomly) __in which one of the tiles is the treasure marker, X__. Inspect the sample output below. The Region size argument should not be allowed to be bigger than the map itself.

// ```javascript

// //bonus 2 output:

// makeFakeMap(5, 5, 'F', 2, 'X');

// [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","F","X","A"],
// ["A","A","F","F","A"],
// ["A","A","A","A","A"]
// ];

// ```