const input = require("fs").readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const line = input[i];
  const stack = [];
  let result = "yes";

  for (let j = 0; j < line.length; j++) {
    if (line[j] === "(" || line[j] === "[") stack.push(line[j]);
    else if (line[j] === ")") {
      if (stack[stack.length - 1] === "(") stack.pop();
      else {
        result = "no";
        break;
      }
    } else if (line[j] === "]") {
      if (stack[stack.length - 1] === "[") stack.pop();
      else {
        result = "no";
        break;
      }
    } else if (line[j] === ".") break;
  }
  if (stack.length !== 0) result = "no";
  console.log(result);
}