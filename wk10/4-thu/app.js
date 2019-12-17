var fs = require('fs');

var data = fs.readFileSync('text.txt', 'utf8')


var dataArrays = data
  .split('\n')
  .map(n => n.split(','))

dataArrays[0].shift()

var keys = dataArrays[0]

dataArrays.shift()

var sampleObject = {}

console.log(dataArrays)

dataArrays.forEach(customer => {

   if (sampleObject[customer[0]] ) {
    console.log("hi")

    sampleObject[customer[0]].push({product: customer[1], unitPrice: customer[2], units: customer[3], totalPrice: customer[2] * customer[3]})
    
   } else {
     sampleObject[customer[0]] = [{product: customer[1], unitPrice: customer[2], units: customer[3], totalPrice: customer[2] * customer[3]}]
   }

})

console.log(sampleObject)


// .toFixed(2)
// dataArrays.forEach(data => {
//   sampleObject[dataArrays[0]] = []
// })

// dataArrays.forEach(data => {
//   data.forEach(ele => {
//     sampleObject[ele[0]] = []
//   })
// })

// const [first...tail] = arr
// return tail 

// sampleObject["Alicia Brereton"] = []
// sampleObject['William Kotai'] = []


// console.log(dataArrays)

// dataArrays.forEach(array => {
//   array.forEach(data => {
//     sampleObject.dataArrays[1][0].push()
//   })
// })



// first require fs so i can use readFileSync,
// then store the text file into a variable
// next store it into an array by using split and map
// now understand the pattern sort it into objects 
// create arrays for each individuals
// each individal has an array



// // put the file into an array 

// // ### Sample output of the format we want our data for processing:
// // ```javascript
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
// // ```