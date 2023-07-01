const input = require('fs').readFileSync(0).toString().split('\n').map(Number);

const A = input[0];
const B = input[1].toString();

console.log(A * B[2]);
console.log(A * B[1]);
console.log(A * B[0]);
console.log(A * B);