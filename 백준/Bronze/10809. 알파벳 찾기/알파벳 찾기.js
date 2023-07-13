const input = require('fs').readFileSync(0).toString().trim();

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const result = Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
    result[alphabet.indexOf(input[i])] = input.indexOf(input[i]);
}

console.log(result.join(' '));