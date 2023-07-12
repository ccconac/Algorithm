const input = require('fs').readFileSync(0).toString().trim().split('\n');

let N = input.shift();
const result = [];

for (let i = 2; i <= N; i++) {
  while (N % i === 0) {
    N /= i;
    result.push(i);
  }
  if (N === 1) break;
}

console.log(result.join('\n'));