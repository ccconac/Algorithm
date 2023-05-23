const input = require('fs').readFileSync(0).toString().trim();

const N = parseInt(input);

result = '';

for (let i = 1; i <= N; i++) {
  for (let j = 0; j < i; j++) {
    result += '*';
  }
  result += '\n';
}

console.log(result);