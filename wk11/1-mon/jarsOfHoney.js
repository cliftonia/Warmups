// # Winnie the Pooh's Honey Problem

// You have 100 jars of honey in a row that are all initially **closed**. You make 100 visits to the jars of honey.

// The first time around, you visit every jar and toggle the lid (if the jar is closed, you open it; if it is open, you close it).

// The second time you only visit every 2nd jar of honey (jar #2, #4, #6, ...). The third time, every 3rd jar of honey (jar #3, #6, #9, ...), etc, until you only visit the 100th jar of honey.

// **Question:** Write a function that shows which jars of honey are **open** after Pooh's last pass?

// ### Extension
// Try it in JavaScript (or in Ruby if you already did it in JavaScript)

// ### Extension 2
// Try completing the warmup using object-oriented programming in either language or both!

//Planning
// how to store the jars of honey,
// create an object that I can loop through

var jarsOfHoney = {};
var counter = 1;

if (counter === 1) {
  for (let i = 1; i <= 100; i++) {
    jarsOfHoney[`Jar ${i}`] = "closed";
  }
  counter += 1;
}

Object.values(jarsOfHoney).forEach(jar => {
  if (jar === "closed" && counter === 2) {
    for (let i = 1; i <= 100; i++) {
      jarsOfHoney[`Jar ${i}`] = "open";
    }
  } else {
    for (let i = 1; i <= 100; i++) {
      jarsOfHoney[`Jar ${i}`] = "closed";
    }
  }
});

counter += 1;

Object.values(jarsOfHoney).forEach(jar => {
  if (jar === "open" && counter === 3) {
    for (let i = 1; i <= 100; i += 2) {
      jarsOfHoney[`Jar ${i}`] = "closed";
    }
  } else {
    for (let i = 1; i <= 100; i += 2) {
      jarsOfHoney[`Jar ${i}`] = "open";
    }
  }
});

counter += 1;

console.log(jarsOfHoney);
