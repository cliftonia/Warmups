// Lunch Orders
// It's approaching lunch hour… let's collect orders. Create a new file called lunch_orders.rb to complete this exercise.

// Create a program that collects lunch orders. Prompt:
// Name for order: (enter name)
var name = prompt("what is your name");
// {name} wants to order: (enter item)
var order = prompt(`hi ${name} what would you like to order`);
// Store the name/order data. When storing data, do it in such a way that additional order items may be added for the person's name.
var lunch = {};

lunch.name = name;
lunch["clifton"] = [];
console.log(lunch);
// Example: Greg can order a Burger, and then add Fries to his order later.
// After storing data, prompt the user with:
// Add another item to the order? (y/n)
// Repeat steps 1 & 2 if the answer is "y"
// After the user completes adding orders, print out:
// "All orders: {order data}"
// Keep going...
// Rather than printing out a blob of raw lunch order data, print each name's orders on a separate line, formatted as one of the following:

// "Greg ordered a sandwich"
// "Peter ordered a burger & fries"
// "Travis ordered a salad, apple & water"
// You may have to do some hunting in Ruby docs!

// lunchOrders = {}

// var name = prompt('What is your name')
// lunchOrders[name] = []

// var foodItem = prompt(`${name} what food item would like: `)
// lunchOrders[name].push({food: []})
// lunchOrders[name][0].food.push(foodItem)

// var drinkItem = prompt(`${name} what drink would you like: `)
// lunchOrders[name][0].drink = []
// lunchOrders[name][0].drink.push(drinkItem)

// var more = prompt('would you like to order more (y/n)')

// while (more === 'y') {

//   var addFood = prompt('what other food would you like?')
//   lunchOrders[name][0].food.push(addFood)

//   var addDrink = prompt('what other drinks would you like?')
//   lunchOrders[name][0].drink.push(addDrink)

//   var more = prompt('would you like to order more (y/n)')
// }

// console.log(`${name} ordered ${lunchOrders[name][0].food} & ${lunchOrders[name][0].drink}`)

// var fs = require('fs');

// var data = fs.readFileSync('text.txt', 'utf8')

// var dataArrays = data
//   .split('\n')
//   .map(n => n.split(','))

// dataArrays.shift()

// function twoDecimals(num1, num2) {
//   var multiply = num1 * num2
//   return multiply.toFixed(2)
// }

// var sampleObject = {}

// dataArrays.forEach(customer => {
//   if (sampleObject[customer[0]]) {

//     sampleObject[customer[0]].push({product: customer[1], unitPrice: customer[2], units: customer[3],totalPrice: twoDecimals(customer[2], customer[3])})
//   } else {
//     sampleObject[customer[0]] = [{ product: customer[1], unitPrice: customer[2], units: customer[3], totalPrice: twoDecimals(customer[2], customer[3])}]
//   }
// })

// console.log(sampleObject)
// .toFixed(2)

// console.log(sampleObject)
// console.log(sampleObject)
// sampleObject = {
//   'clifton': [

//   ]
// }

// var sampleObject = {
//    'Alica Brereton':[
//       {
//          product:'Marijuana',
//          unitPrice:'9.18',
//          units:'50',
//          totalPrice:'459.00'
//       }
//    ],
//    'William Kotai':[
//       {
//          product:'ecstasy',
//          unitPrice:'19.12',
//          units:'20',
//          totalPrice:'382.40'
//       }
//    ],
//    'Joel Forro':[
//       {
//          product:'heroin',
//          unitPrice:'91.16',
//          units:'5',
//          totalPrice:'455.80'
//       },
//       {
//          product:'ecstasy',
//          unitPrice:'19.12',
//          units:'10',
//          totalPrice:'191.20'
//       }
//    ],
//    'David Ernest':[
//       {
//          product:'Methamphetamine',
//          unitPrice:'108.78',
//          units:'5',
//          totalPrice:'543.90'
//       },
//       {
//          product:'cocaine',
//          unitPrice:'80',
//          units:'2',
//          totalPrice:'160.00'
//       }
//    ],
//    'Gabriella Hyde':[
//       {
//          product:'Marijuana',
//          unitPrice:'9.18',
//          units:'10',
//          totalPrice:'91.80'
//       },
//       {
//          product:'Methamphetamine',
//          unitPrice:'108.78',
//          units:'8',
//          totalPrice:'870.24'
//       }
//    ]
// }
