const input = require('fs').readFileSync(0).toString().trim().split('\n').map(i => i.split(' ').map(Number));

const [N, M] = input[0];
const A = input[1];
const B = input[2];
const map = new Map(A.map(v => [v]));

const result = [];

B.forEach(el => {
    if (!map.has(el)) result.push(el);
});

const sub = M - parseInt(result.length);
const count = (N - sub) + parseInt(result.length);

console.log(count);