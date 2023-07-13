const input = require('fs').readFileSync(0).toString().trim();

const word = input.toUpperCase().split('');
const map = new Map();

word.forEach(v => {
    if (map.has(v)) map.set(v, map.get(v) + 1);
    else map.set(v, 1);
});

const arr = Array.from(map.values());
const result = [];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
}

map.forEach((v, i) => {
    if (map.get(i) === max) result.push(i);
});

console.log(result.length > 1 ? '?' : result[0]);
