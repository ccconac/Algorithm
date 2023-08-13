const input = require("fs").readFileSync(0).toString().trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const PS = input[i];
  const stack = [];
  let VPS = "YES";

  for (let j = 0; j < PS.length; j++) {
    if (PS[j] === "(") stack.push(PS[j]);
    else {
      if (!stack.pop()) {
        VPS = "NO";
        break;
      }
    }
  }

  if (stack.length !== 0) VPS = "NO";
  console.log(VPS);
}