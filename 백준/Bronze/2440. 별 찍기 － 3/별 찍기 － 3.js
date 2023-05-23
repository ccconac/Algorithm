const input = require('fs').readFileSync(0).toString().trim();

const N = parseInt(input);

result = '';

for (let i = 0; i < N; i++) {
  for (let j = N - i; j > 0; j--) {
    result += '*';
  }
  result += '\n';
}

console.log(result);