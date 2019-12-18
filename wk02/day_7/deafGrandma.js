// # Grandma

// Write a Deaf Grandma program.

// Whatever you say to grandma (whatever you type in), she should respond with

// > HUH?!  SPEAK UP, SONNY!

// unless you shout it (type in all capitals).

// If you shout, she can hear you (or at least she thinks so) and yells back

// > NO, NOT SINCE 1938!

// To make your program really believable, have grandma shout a different year each time; maybe any year at random between 1930 and 1950.

// You can't stop talking to grandma until you shout BYE.

// ## Extensions

// 1. What if grandma doesn't want you to leave? When you shout BYE, she could pretend not to hear you. Change your previous program so that you have to shout BYE three times in a row. Make sure to test your program: if you shout BYE three times, but not in a row, you should still be talking to grandma.

var isUpperCase = function(str) {
  return str === str.toUpperCase();
};

var isLowerCase = function(strr) {
  return strr === strr.toLowerCase();
};

var sayBye = "BYE";

function randomYear() {
  return Math.floor(Math.random() * (1950 - 1930)) + 1930;
}

var exit = "BYE";
var byeCounter = 0;

while (byeCounter < 3) {
  var askGrandma = prompt(
    "Ask grandma a question, make sure you speak loud enough as she is deaf"
  );

  if (askGrandma === askGrandma.toLowerCase()) {
    var shout = alert("HUH?! SPEAK UP, SONNY!");
    byeCounter -= 1;
  } else if (askGrandma === "BYE") {
    byeCounter += 1;
    if (byeCounter === 3) {
      alert("bye Bye");
    }
  } else if (askGrandma === askGrandma.toUpperCase()) {
    var speakUp = alert("NO, NOT SINCE " + randomYear() + "!");
    byeCounter -= 1;
  }
}
