var numToRoman = num => {
  var romans = [
    "0",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
    "XIII",
    "XIV",
    "XV",
    "XVI",
    "XVII",
    "XVIII",
    "XIX",
    "XX"
  ];

  romans.forEach((rom, i) => {
    if (i === num) {
      console.log(rom);
    }
  });
};
