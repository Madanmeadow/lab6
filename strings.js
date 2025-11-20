// strings.js
// Common string functions

let text = 'hello world'

let stringLength = text.length
let shout = text.toUpperCase()
let whisper = text.toLowerCase()
let whereIsW = text.indexOf('w')
let whereIsZ = text.indexOf('z')
let whisperAndShout = whisper.concat(shout)
let replaceO = text.replace('o', '0')
let replaceAllO = text.replace(/o/g, '0')
let removeWhitespace = text.trim()

console.log(
    stringLength,
    shout,
    whisper,
    whereIsW,
    whereIsZ,
    whisperAndShout,
    replaceO,
    replaceAllO,
    removeWhitespace
)

let text2 = 'The classes are ITEC 1150, ITEC 1250, ITEC 2560'

let replaced = text2.replace('ITEC', 'JJEC')
console.log(replaced)

let replacedAll = text2.replace(/ITEC/g, 'JJEC')
console.log(replacedAll)
