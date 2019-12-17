// # Check for Palindromes

// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// [Some Palindromes to test against](http://www.palindromelist.net/)

// Good Luck!

var palindrome = function (string) {
  var string = string.toLocaleLowerCase()
  string = string.replace(/\s/g,''); 
  return Array.from(string).toString() === Array.from(string).reverse().toString()
}

var isPalindrome = function (str) {
  let strLen = Math.floor(str.length / 2);
  str = str.toLocaleLowerCase();

  for (let i = 0; i < strLen; i++) {
    if (str[i] !== str[strLen - i - 1]) {
      return true;
    }
  }
  return false;
}
