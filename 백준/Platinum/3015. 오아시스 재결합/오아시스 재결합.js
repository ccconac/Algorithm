const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

const N = input.shift();
const stack = [];
const counts = [];

let answer = 0;

input.forEach((person) => {
  let sameCount = 1;

  while (stack.length && stack[stack.length - 1] <= person) {
    answer += counts[counts.length - 1];

    if (stack[stack.length - 1] === person) {
      sameCount = counts[counts.length - 1] + 1;
    }

    stack.pop();
    counts.pop();
  }

  if (stack.length > 0) {
    answer += 1;
  }

  stack.push(person);
  counts.push(sameCount);
});

console.log(answer);