// # A wolf in sheep's clothing

// You are a sheep farmer, and are plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the end of the queue/array:
// `[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)`

// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep".
// Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// ### Examples:
// ```
// warnTheSheep(["sheep", "wolf", "sheep"]) === "Oi! Sheep number 1! You are about to be eaten by a wolf!"
// warnTheSheep(["sheep", "sheep", "wolf"]) === "Pls go away and stop eating my sheep"
// warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]) === "Oi! Sheep number 5! You are about to be eaten by a wolf!"
// ```

// // try agin and use the reverse approach 


// var herdOfSheep = ['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']

// // herdOfSheep.sort(() => Math.random() - 0.5);

// var farm = function (array) {
//   if (array.indexOf('wolf') === 5) {
//     console.log(array[6].toString() + " number 5! You are about to be eaten by a wolf!")
//     array.unshift('sheep');
//     array.pop();
//     if (array.indexOf('wolf') === 6) {
//       console.log(array[7].toString() + " number 6! You are about to be eaten by a wolf!")
//       array.unshift('sheep');
//       array.pop();
//       if (array.indexOf('wolf') === 7) {
//         console.log(array[7].toString() + " Pls go away and stop eating my sheep")
//         array.unshift('wolf');
//         array.pop();
//         if (array.indexOf('wolf') === 0) {
//           console.log(array[1].toString() + " number 1! You are about to be eaten by a wolf!")
//           array.unshift('sheep');
//           array.pop();
//           if (array.indexOf('wolf') === 1) {
//             console.log(array[2].toString() + " number 2! You are about to be eaten by a wolf!")
//             array.unshift('sheep');
//             array.pop();
//             if (array.indexOf('wolf') === 2) {
//               console.log(array[3].toString() + " number 3! You are about to be eaten by a wolf!")
//               array.unshift('sheep');
//               array.pop();
//               if (array.indexOf('wolf') === 3) {
//                 console.log(array[4].toString() + " number 4! You are about to be eaten by a wolf!")
//                 array.unshift('sheep');
//                 array.pop();
          
//         }
//       }
//     }
//   }
//       }
//     }
//   }
// }

// var warnTheSheep = function () {
//   if (array.indexOf('wolf')) === (array.length)
// }

var array = ["sheep", "sheep", "wolf", "sheep", "sheep"];

var one = ["sheep", "wolf", "sheep"]
one.length; // 3
one.length - 1; // 2 sheep
one.indexOf('wolf'); // 1

// 1
// Number of sheep - index of wolf => sheep no.

var five = ["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]
five.length; // 7
five.length - 1; // 6 sheep
five.indexOf('wolf'); // 1

// 5
// Number of sheep - index of wolf => sheep no.

var one = ["sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep", "sheep"]
one.length; // 8
one.length - 1; // 7 sheep
one.indexOf('wolf'); // 4

// 3
// Number of sheep - index of wolf => sheep no.


var warnTheSheep = function(array) {
    if (array.indexOf('wolf') === (array.length - 1)) {
        return 'Pls go away and stop eating my sheep';
    } else {
        var sheepNumber = (array.length -1) - (array.indexOf('wolf'));
        return 'Oi! Sheep number ' + sheepNumber + '! You are about to be eaten by a wolf!';
    }
}

console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]));



// if (herdOfSheep.indexOf('wolf') === 5) {
//   console.log(herdOfSheep[6].toString() + " number 5! You are about to be eaten by a wolf!")
//   herdOfSheep.unshift('sheep');
//   herdOfSheep.pop();
//   if (herdOfSheep.indexOf('wolf') === 6) {
//     console.log(herdOfSheep[7].toString() + " number 6! You are about to be eaten by a wolf!")
//     herdOfSheep.unshift('sheep');
//     herdOfSheep.pop();
//     if (herdOfSheep.indexOf('wolf') === 7) {
//       console.log(herdOfSheep[7].toString() + " Pls go away and stop eating my sheep")
//       herdOfSheep.unshift('wolf');
//       herdOfSheep.pop();
//       if (herdOfSheep.indexOf('wolf') === 0) {
//         console.log(herdOfSheep[1].toString() + " number 1! You are about to be eaten by a wolf!")
//         herdOfSheep.unshift('sheep');
//         herdOfSheep.pop();
//         if (herdOfSheep.indexOf('wolf') === 1) {
//           console.log(herdOfSheep[2].toString() + " number 2! You are about to be eaten by a wolf!")
//           herdOfSheep.unshift('sheep');
//           herdOfSheep.pop();
//           if (herdOfSheep.indexOf('wolf') === 2) {
//             console.log(herdOfSheep[3].toString() + " number 3! You are about to be eaten by a wolf!")
//             herdOfSheep.unshift('sheep');
//             herdOfSheep.pop();
//             if (herdOfSheep.indexOf('wolf') === 3) {
//               console.log(herdOfSheep[4].toString() + " number 4! You are about to be eaten by a wolf!")
//               herdOfSheep.unshift('sheep');
//               herdOfSheep.pop();
//       }
//     }
//   }
// }
//     }
//   }
// }
// }




// for (var i = 0; i < herdOfSheep.length; i++) {
//   var herd = herdOfSheep[i]
//   console.log(herd)
//  }

// indexOf('wolf')

// if () {

// }

// var goAway = 'Pls go away and stop eating my sheep'

// if (herd === ['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']) {
//   console.log(goAway)
// }