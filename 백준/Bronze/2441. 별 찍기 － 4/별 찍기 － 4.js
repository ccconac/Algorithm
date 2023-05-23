const input = require('fs').readFileSync(0).toString().trim();

const N = parseInt(input);

result = '';

for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
        result += ' ';
    }
    for (let k = N - i; k > 0; k--) {
    result += '*';
    }
    result += '\n';
}

console.log(result);