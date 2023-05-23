const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

let arr;

for (let i = 0; i < input.length - 1; i++) {
    for (let j = 1; j < input.length; j++) {
        if (input.reduce((acc, num) => acc + num, 0) === input[i] + input[j] + 100) {
            arr = input.filter(num => num !== input[i] && num !== input[j]);
            break;
        }
    }
    if (arr !== undefined) break;
}

arr.sort((a, b) => a - b);
arr.forEach(a => console.log(a));