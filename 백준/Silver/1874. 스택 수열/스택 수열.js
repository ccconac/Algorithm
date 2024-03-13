const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

const n = input.shift();
const stack = [];
const answer = [];

let currentNumber = 1;
let sequence = true;

input.forEach((sequenceNumber) => {
  while (currentNumber <= sequenceNumber) {
    stack.push(currentNumber);
    answer.push('+');

    currentNumber += 1;
  }

  if (sequenceNumber === stack[stack.length - 1]) {
    stack.pop();
    answer.push('-');
  } else sequence = false;
});

if (sequence) console.log(answer.join('\n'));
else console.log('NO');