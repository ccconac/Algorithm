const input = require('fs').readFileSync(0).toString().trim().split('\n').map(a => a.split(' ').map(Number));

const [N, k] = input[0];
const x = input[1].sort((a, b) => b - a);

console.log(x[k - 1]);