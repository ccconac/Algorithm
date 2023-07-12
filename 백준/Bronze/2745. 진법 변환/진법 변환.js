const input = require('fs').readFileSync(0).toString().trim().split(' ');

let N = input[0].split('').reverse();
const B = parseInt(input[1]);

let result = 0;

for (let i = 0; i < N.length; i++) {
    if ('A' <= N[i] && N[i] <= 'Z') {
        N[i] = N[i].charCodeAt(0) - 55;
        result += N[i] * Math.pow(B, i);
    } else {
        N[i] = Number(N[i]);
        result += N[i] * Math.pow(B, i);
    }
}

console.log(result);