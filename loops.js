// loops.js
// Two ways of looping: forEach + traditional for loop

let birds = ['Owl', 'Robin', 'Eagle']

console.log(birds)

// forEach loop
birds.forEach(function(bird) {
    console.log(bird.toUpperCase())
})

// traditional for loop
for (let x = 0; x < birds.length; x++) {
    let birdName = birds[x]
    console.log(birdName.toUpperCase())
}
