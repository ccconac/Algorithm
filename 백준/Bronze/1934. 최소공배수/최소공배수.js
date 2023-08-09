const input = require("fs").readFileSync(0).toString().trim().split("\n").map((v) => v.split(" ").map(Number));

const [T] = input[0];

const gcd = (a, b) => {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
};

const lcm = (a, b) => (a * b) / gcd(a, b);

for (let i = 1; i <= T; i++) {
  console.log(lcm(input[i][0], input[i][1]));
}