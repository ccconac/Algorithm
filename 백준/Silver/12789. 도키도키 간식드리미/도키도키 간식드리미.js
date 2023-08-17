const input = require("fs").readFileSync(0).toString().split("\n");

const N = parseInt(input.shift());
const [firstLine] = input.map((v) => v.split(" ").map(Number));

let line = 0;
const stack = [];

for (let i = 0; i < N; i++) {
  while (stack[stack.length - 1] === line + 1 || firstLine[i] === line + 1) {
    if (stack[stack.length - 1] === line + 1) {
      line = stack.pop();
    } else {
      line = firstLine[i];
      break;
    }
  }
  if (line !== firstLine[i]) stack.push(firstLine[i]);
}

while (stack[stack.length - 1] === line + 1) {
  if (stack[stack.length - 1] === line + 1) line = stack.pop();
}

console.log(stack.length ? "Sad" : "Nice");