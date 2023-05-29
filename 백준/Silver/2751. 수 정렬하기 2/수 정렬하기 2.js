const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

const N = parseInt(input.shift());
input.sort((a, b) => a - b);

console.log(input.join('\n'));