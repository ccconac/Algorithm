const input = require('fs').readFileSync(0).toString().trim();

const result = [];

for (let i = 1; i <= input.length; i++) {
    for (let j = 0; j <= input.length- i; j++) {
        result.push(input.slice(j, j + i));
    }
}

const set = new Set(result).size;
console.log(set);