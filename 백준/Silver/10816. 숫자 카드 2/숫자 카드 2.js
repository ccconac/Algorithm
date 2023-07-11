const input = require('fs').readFileSync(0).toString().split('\n');

const [N, cardN, M, cardM] = input.map(v => v.split(' ').map(Number));
const map = new Map();

cardN.forEach(el => {
    if (map.has(el)) map.set(el, map.get(el) + 1);
    else map.set(el, 1);
});

const result = [];
cardM.forEach(el => {
    if (map.has(el)) result.push(map.get(el));
    else result.push(0);
});

console.log(result.join(' '));