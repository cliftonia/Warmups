// ## Extension
// Now work out each golfers round compared to the course par.

// var par = {
// Hole1: 3,
// Hole2: 4,
// Hole3: 5,
// Hole4: 5,
// Hole5: 3,
// Hole6: 3,
// Hole7: 4,
// Hole8: 3,
// Hole9: 5
// }

// for (var i = 0; i < par.lenght; i++) {
//   var parCombined = par[i]
// }

// if (object1 )

// #### Ninja Extension
// Fish loves a punt. Having placed a $1 bet on each stroke over par that Bob and Jimbo played per hole calculate his winnings.

// # Mini Golf

// Bob, Jimbo and Fish love mini golf. But, every time they hand in their score cards none of the scores are ever totalled. Write a function called `totalScores` in JS that calculates their scores and `console.log` the total for each player and their combined total.

var bob = {
  Hole1: 3,
  Hole2: 2,
  Hole3: 6,
  Hole4: 11,
  Hole5: 9,
  Hole6: 2,
  Hole7: 6,
  Hole8: 9,
  Hole9: 10
};

var Jimbo = {
  Hole1: 5,
  Hole2: 12,
  Hole3: 9,
  Hole4: 22,
  Hole5: 13,
  Hole6: 7,
  Hole7: 16,
  Hole8: 10,
  Hole9: 11
};

var Fish = {
  Hole1: 2,
  Hole2: 2,
  Hole3: 4,
  Hole4: 5,
  Hole5: 4,
  Hole6: 3,
  Hole7: 6,
  Hole8: 4,
  Hole9: 1
};

var totalScoreCard = (object1, object2, object3) => {
  var par = {
    Hole1: 3,
    Hole2: 4,
    Hole3: 5,
    Hole4: 5,
    Hole5: 3,
    Hole6: 3,
    Hole7: 4,
    Hole8: 3,
    Hole9: 5
  };

  var score1 = [];
  var score2 = [];
  var score3 = [];
  var parscore = [];

  for (let value in object1) {
    score1.push(object1[value]);
  }

  for (let value in object2) {
    score2.push(object2[value]);
  }

  for (let value in object3) {
    score3.push(object3[value]);
  }

  for (let value in par) {
    parscore.push(par[value]);
  }

  var totalScore1 = score1.reduce((a, b) => a + b, 0);
  var totalScore2 = score2.reduce((a, b) => a + b, 0);
  var totalScore3 = score3.reduce((a, b) => a + b, 0);
  var totalParScore = parscore.reduce((a, b) => a + b, 0);
  var combinedScore = totalScore1 + totalScore2 + totalScore3;

  console.log(totalScore1);
  console.log(totalScore2);
  console.log(totalScore3);
  console.log(totalParScore);
  console.log(combinedScore);
};

var totalScoreCard = function(object1, object2, object3) {
  for (var i = 0; i < object1.lenght; i++) {
    var objectCombined1 = object1[i];
  }
  var sum1 = 0;
  for (let objectCombined1 in object1) {
    sum1 += object1[objectCombined1];
  }
  console.log("Player1 scored " + sum1);
  for (var i = 0; i < object2.lenght; i++) {
    var objectCombined2 = object2[i];
  }
  var sum2 = 0;
  for (let objectCombined2 in object2) {
    sum2 += object2[objectCombined2];
  }
  console.log("Player2 scored " + sum2);
  for (var i = 0; i < object3.lenght; i++) {
    var objectCombined3 = object3[i];
  }
  var sum3 = 0;
  for (let objectCombined3 in object3) {
    sum3 += object3[objectCombined3];
  }
  console.log("Player3 scored " + sum3);
  totalSum = sum1 + sum2 + sum3;
  console.log("your combined scores are " + totalSum);
  if (sum3 > 35) {
    var remainder = sum3 - 35;
    console.log("Your winnings are $" + remainder);
  } else {
    var remainder = sum3 - 35;
    console.log("Player3 lost $" + remainder);
  }
};

totalScoreCard(bob, Jimbo, Fish);
