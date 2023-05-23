const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

let odd = [];
let sum = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 !== 0) {
        odd.push(input[i]);
        sum += input[i];
    }
}

let min = Math.min(...odd);

if (odd.length === 0) {
    console.log(-1);
} else console.log(`${sum}\n${min}`);

