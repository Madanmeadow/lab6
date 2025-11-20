// conditions.js

function shout(text) {
    return text.toUpperCase() + '!!!!'
}

let message = shout("hello web programmers")
console.log(message)

function f_to_c(f, decimalPlaces) {
    let celsius = (f - 32) * 5 / 9

    if (decimalPlaces) {
        return celsius.toFixed(decimalPlaces)
    }
    return celsius
}

console.log(f_to_c(100, 2))
