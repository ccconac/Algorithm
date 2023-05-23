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

for (let i = 1; i < N; i++) {
    for (let r = 0; r < i; r++) {
        result += ' ';
    }

    for (let s = (N - i) * 2 - 1; s > 0; s--) {
        result += '*';
    }
    result += '\n';
}

console.log(result);