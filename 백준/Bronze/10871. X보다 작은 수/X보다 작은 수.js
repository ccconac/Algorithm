const input = require('fs').readFileSync(0).toString().trim().split('\n').map(n => n.split(' ').map(Number));

const [N, X] = input[0];
const A = input[1];
let reuslt = [];

for (let i = 0; i < A.length; i++) {
    if (A[i] < X) reuslt.push(A[i]);
}

console.log(...reuslt);
