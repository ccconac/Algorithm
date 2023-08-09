const input = require("fs").readFileSync(0).toString().split("\n").map(Number);

const N = input.shift();
const trees = input;

const sub = [];
let count = 0;

for (let i = 1; i < N; i++) {
  sub.push(trees[i] - trees[i - 1]);
}

const gcd = (a, b) => {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
};

let min = 0;

for (let i = 0; i < sub.length; i++) {
  min = gcd(min, sub[i]);
}

for (let i = 0; i < sub.length; i++) {
  count += sub[i] / min - 1;
}

console.log(count);