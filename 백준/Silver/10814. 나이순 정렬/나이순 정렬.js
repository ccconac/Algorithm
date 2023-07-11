const input = require('fs').readFileSync(0).toString().trim().split('\n');

const N = input.shift();
const arr = input.map(i => i.split(' '));
let result = '';

const sortArr = arr.sort((a, b) => a[0] - b[0]);

sortArr.forEach((i) => {
    result += `${i[0]} ${i[1]}\n`
})

console.log(result);