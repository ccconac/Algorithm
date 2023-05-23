const input = require('fs').readFileSync(0).toString().trim();

const N = parseInt(input);

result = '';

for (let i = 1; i <= N; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    for (let k = N * 2 - i * 2; k > 0; k--) {
        result += ' ';
    }
    for (let l = 0; l < i; l++) {
        result += '*';
    }
    result += '\n';
}

for (let i = 1; i < N; i++) {
    for (let j = N - i; j > 0; j--) {
        result += '*';
    }
    
    for (let k = 0; k <= i * 2 - 1; k++) {
        result += ' ';
    }

    for (let l = N - i; l > 0; l--) {
        result += '*';
    }
    result += '\n';
}

console.log(result);