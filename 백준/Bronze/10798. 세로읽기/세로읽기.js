const input = require('fs').readFileSync(0).toString().trim().split('\n').map(v => v.split(''));

let result = '';
const temp = Array.from(Array(5), () => Array(15).fill(''));

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 15; j++) {
        if (input[i][j] === undefined) temp[i][j] = '';
        else temp[i][j] = input[i][j];
    }
}

for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 5; j++) {
        result += temp[j][i];
    }
}

console.log(result);