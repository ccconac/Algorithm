const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

const N = input.shift();
const buildingHeights = input;
const stack = [];

let answer = 0;

buildingHeights.forEach((buildingHeight) => {
  while (stack.length) {
    if (buildingHeight < stack[stack.length - 1]) break;
    stack.pop();
  }

  stack.push(buildingHeight);
  answer += stack.length - 1;
});

console.log(answer);