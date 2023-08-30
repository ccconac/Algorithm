const input = require("fs").readFileSync(0).toString().split("\n").map(Number);

const N = input.shift();
const stack = [];
let answer = "";
let count = 1;

for (let i = 0; i < N; i++) {
  const num = input.shift();

  while (count <= num) {
    stack.push(count++);
    answer += "+\n";
  }

  const popNum = stack.pop();

  if (popNum !== num) {
    answer = "NO";
    break;
  }

  answer += "-\n";
}

answer === "NO" ? console.log(answer) : console.log(answer.trim());