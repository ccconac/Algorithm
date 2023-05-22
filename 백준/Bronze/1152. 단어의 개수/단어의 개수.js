const input = require('fs').readFileSync(0).toString();

let wordArr = input.trim().split(' ');
let count = 0;

for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] !== '') count++;
}

console.log(count);