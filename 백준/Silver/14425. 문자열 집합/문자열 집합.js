const input = require('fs').readFileSync(0).toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const S = [];
const mArr = [];

const map = new Map();
let result = 0;

for (let i = 1; i <= N; i++) {
    S.push(input[i]);
}

for (let i = N + 1; i < input.length; i++) {
    mArr.push(input[i]);
}

S.forEach(el => {
    map.set(el);
});

mArr.forEach(el => {
    if (map.has(el)) result += 1;
});

console.log(result);