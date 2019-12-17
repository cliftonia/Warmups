var romanNumConvertor = num => {
  var roman = {
    0: "0",
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    11: "XI",
    12: "XII",
    13: "XIII",
    14: "XIV",
    15: "XV",
    16: "XVI",
    17: "XVII",
    18: "XVIII",
    19: "XIX",
    20: "XX"
  };

  Object.values(roman).forEach((val, i) => {
    if (i === num) {
      console.log(val);
    }
  });
};

var newWord = [];

str = str.split("");

str.forEach(s => {
  newWord.push(s.charCodeAt(s));
});

newWord = newWord.map(m => m + 1);

newWord = newWord.map(m => String.fromCharCode(m));

var vowels = ["a", "e", "i", "o", "u"];

str = newWord.replace(/[aeiou]/g, c => {
  return c.toUpperCase();
});

function romanize(num) {
  var lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    },
    roman = "",
    i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

module.exports = romanize;
