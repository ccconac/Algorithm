const input = require('fs').readFileSync(0).toString().split('\n');

const N = input.shift();
const towerHeights = input[0].split(' ').map(Number);

const stack = [];
const answer = Array.from({ length: N }, () => 0);

towerHeights.forEach((height, index) => {
  while (stack.length !== 0) {
    const [targetIndex, targetHeight] = stack[stack.length - 1];

    if (targetHeight > height) {
      answer[index] = targetIndex;
      break;
    }

    stack.pop();
  }

  stack.push([index + 1, height]);
});

console.log(answer.join(' '));