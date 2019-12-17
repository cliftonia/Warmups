const romanize = require("./app");

test("the number 1 will convert into I", () => {
  expect(romanize(1)).toEqual("I");
});

test("the number 0 will be an empty string", () => {
  expect(romanize(0)).toEqual("");
});
