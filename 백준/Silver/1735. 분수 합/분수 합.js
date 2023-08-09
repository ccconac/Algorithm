const input = require("fs").readFileSync(0).toString().split("\n").map((v) => v.split(" ").map(Number));

const A = input[1][0] * input[0][1] + input[1][1] * input[0][0];
const B = input[0][1] * input[1][1];

const gcd = (a, b) => {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
};

const div = gcd(A, B);

console.log(A / div, B / div);