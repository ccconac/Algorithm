const input = require('fs').readFileSync(0).toString().trim().split('\n').map(v => v.split(' '));

const [T] = input.shift();
const R = [];
const str = [];

const result = [];

input.forEach(v => {
    R.push(parseInt(v[0]));
});

input.forEach(v => {
    str.push(v[1].split(''));
});

for (let i = 0; i < input.length; i++) {
    let temp = ''
    for (let j = 0; j < str[i].length; j++) {
        for (let k = 0; k < R[i]; k++) {
            temp += str[i][j];
        }
    }
    result.push(temp);
}

console.log(result.join('\n'));