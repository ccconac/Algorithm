const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

const T = input.shift();
const C = input;

for (let i = 0; i < T; i++) {
    let M = input[i];
    let result = [];

    result.push(Math.floor(M / 25));
    M %= 25;
    
    result.push(Math.floor(M / 10));
    M %= 10;

    result.push(Math.floor(M / 5));
    M %= 5;

    result.push(Math.floor(M));

    console.log(result.join(' '));
}
