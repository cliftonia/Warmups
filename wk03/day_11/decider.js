
// CoinFlip
// The Ultimate Life Decider
// Never make a decision again!

// Core problem
// Create a file called decider.js
// Write a function called coinFlip that will console.log HEADS or TAILS when called
// Add a counter that declares WINNER in the console when either HEADS or TAILS is flipped 5 times.
// Extension
// Create a file called decider.html
// Find any coin image online
// Link the .js file, while you're there you may also decide to add a .css file for some styling
// Now add the necessary components to the decider.html file so that when the coin image is clicked the coinFlip function result and tally are returned somewhere on the page.

var heads = true
var tails = false

var bitCount = 0;
var dodgeCount = 0;

var flipCoinBtn = document.querySelector('.flipcoin')
var flipResult = document.querySelector('.flipResult')
var image = document.querySelector('.img')

var dodgecoinTally = document.querySelector('.dodgecoinTally')
var bitcoinTally = document.querySelector('.bitcoinTally')

var coinFlip = function () {
  var flip = (Math.floor(Math.random() * 2) == 0);
  if (flip === true) {
    flipResult.textContent = "Bitcoin"
    bitCount += 1;
    document.querySelector('.bitcoinTally').textContent += '|'
    document.body.style.backgroundColor = "mistyrose"
    document.body.style.color = "limegreen"
    image.src="bitcoin.jpg"
  } else {
    flipResult.textContent = "Dodgecoin"
    dodgeCount += 1
    document.querySelector('.dodgecoinTally').textContent += '|'
    document.body.style.backgroundColor = "limegreen"
    document.body.style.color = "mistyrose"
    image.src="dodgecoin.jpg"
  }
  if (bitCount > 5) {
    alert('Bitcoin Wins!')
    image.src="bitcoin.jpg"
    bitCount = 0
    document.querySelector('.bitcoinTally').textContent += ''
  } else if (dodgeCount > 5) {
    alert('Dodgecoin Wins!')
    image.src="dodgecoin.jpg"
    dodgeCount = 0
    document.querySelector('.dodgecoinTally').textContent += ''
  } 
}

flipCoinBtn.addEventListener('click', coinFlip)

