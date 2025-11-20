// functions.js

function shout(text) {
    return text.toUpperCase() + "!!!!"
}

console.log(shout("hello"))

function isMinnesotaZip(code) {
    code = Number(code)
    if (isNaN(code)) return false
    return code >= 55001 && code <= 56763
}

console.log(isMinnesotaZip(55403))

function validGPA(gpa) {
    gpa = Number(gpa)
    if (isNaN(gpa) || gpa < 0 || gpa > 4) return false
    return true
}

function cityStateAddress(city, state) {
    return `${city}, ${state.toUpperCase()}`
}

console.log(cityStateAddress("Minneapolis", "mn"))
