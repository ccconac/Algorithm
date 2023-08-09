const input = require("fs").readFileSync(0).toString();

const N = Number(input);
let num = 666;
let result = 0;

while (true) {
  if (num.toString().includes("666")) {
    result += 1;
  }

  if (result === N) {
    console.log(num);
    break;
  }

  num += 1;
}