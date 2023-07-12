const input = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

let N = input[0];
const B = input[1];

const result = [];
while (N > 0) {
    result.push(N % B);
    N = Math.floor(N / B);
}

result.reverse();

for (let i = 0; i < result.length; i++) {
    if (10 <= result[i] && result[i] <= 35) {
        result[i] = String.fromCharCode(result[i] + 55);
    }
}

console.log(result.join(''));