const input = require('fs').readFileSync(0).toString().trim().split('\n').map(n => n.split(' ').map(Number));

const T = parseInt(input.shift());
let answer = '';

for (let i = 0; i < T; i++) {
    answer += input[i][0] + input[i][1] + '\n';
}

console.log(answer);