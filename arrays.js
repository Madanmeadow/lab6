// arrays.js
// Demonstrating basic array operations

let animals = ['lion', 'zebra', 'cheetah', , , , 'giraffe']

console.log(animals)
console.log(animals[1]) // zebra

animals.push('elephant')
console.log(animals)

animals.unshift('deer')
console.log(animals)

let firstAnimal = animals.shift()
console.log(firstAnimal)
console.log(animals)
