const input = require('fs').readFileSync(0).toString().trim();

const N = parseInt(input);

result = '';

for (let i = 1; i <= N; i++) {
    for (let j = N - i; j > 0; j--) {
        result += ' ';
    }
    for (let k = 0; k < i * 2 - 1; k++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);