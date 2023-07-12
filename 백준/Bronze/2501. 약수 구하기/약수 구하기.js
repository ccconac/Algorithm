const input = require('fs').readFileSync(0).toString().trim().split(' ');

const p = input[0];
const q = input[1];
const divisor = [];

for (let i = 1; i <= p; i++) {
    if (p % i === 0) divisor.push(i);
}

if (divisor.length < q) console.log(0);
else console.log(divisor[q - 1]);