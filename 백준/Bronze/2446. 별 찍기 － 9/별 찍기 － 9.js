const input = require('fs').readFileSync(0).toString().trim();

const N = parseInt(input);

result = '';

for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      result += ' ';
    }
    for (let k = N * 2 - i - 1; k > i; k--) {
      result += '*';
    }
    result += '\n';
  }
  
  for (let i = 1; i < N; i++) {
    for (let j = N - i - 1; j > 0; j--) {
      result += ' ';
    }
  
    for (let k = 0; k <= i * 2; k++) {
      result += '*';
    }
    result += '\n';
  }
  
  console.log(result);