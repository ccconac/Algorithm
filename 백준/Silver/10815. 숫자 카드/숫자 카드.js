const input = require('fs').readFileSync(0).toString().split('\n');

const [N, cardN, M, cardM] = input.map(v => v.split(' ').map(Number));
const map = new Map();
const result = [];

cardN.forEach(v => map.set(v, 1));
cardM.forEach(v => {
    if (map.has(v)) result.push(map.get(v));
    else result.push(0);
});

console.log(result.join(' '));