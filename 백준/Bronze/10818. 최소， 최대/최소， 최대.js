const input = require('fs').readFileSync(0).toString().trim().split('\n').map(i => i.split(' ').map(Number));

const N = parseInt(input.shift());
const [number] = input;

const max = Math.max(...number);
const min = Math.min(...number);

console.log(`${min} ${max}`);