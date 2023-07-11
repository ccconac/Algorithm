const input = require('fs').readFileSync(0).toString().trim().split('').map(Number);

const result = input.sort((a, b) => b - a).join('');
console.log(parseInt(result));