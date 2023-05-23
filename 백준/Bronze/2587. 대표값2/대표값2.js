const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

let sortNum = input.sort((a, b) => a - b);
let sum = 0;

for (let i = 0; i < sortNum.length; i++) {
    sum += sortNum[i];
}

const avg = sum / sortNum.length;
const median = sortNum[Math.floor(sortNum.length / 2)];

console.log(`${avg}\n${median}`);
