const numbers = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

const sort = numbers.sort((a, b) => a - b);

console.log(...sort);