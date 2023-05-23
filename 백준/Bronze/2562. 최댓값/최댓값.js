const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

let max = input[0];

for (let i = 0; i < input.length; i++) {
    if (max < input[i]) max = input[i];
}

console.log(`${max}\n${input.indexOf(max) + 1}`);