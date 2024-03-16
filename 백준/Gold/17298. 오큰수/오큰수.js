const input = require('fs').readFileSync(0).toString().trim().split('\n');

const N = Number(input.shift());
const A = input[0].split(' ').map(Number);

const stack = [];
const answer = Array.from({ length: N }, () => -1);

for (let i = 0; i < N; i++) {
  while (stack.length && A[stack[stack.length - 1]] < A[i]) {
    answer[stack.pop()] = A[i];
  }

  stack.push(i);
}

console.log(answer.join(' '));