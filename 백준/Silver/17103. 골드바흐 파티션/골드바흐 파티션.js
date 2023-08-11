const input = require("fs").readFileSync(0).toString().split("\n").map(Number);

const T = input.shift();
const max = Math.max(...input);
const prime = new Array(max + 1).fill(true);

for (let i = 2; i <= Math.sqrt(max); i++) {
  if (prime[i]) {
    for (let j = 2; j <= max / i; j++) {
      prime[i * j] = false;
    }
  }
}

const result = [];

for (let i = 0; i < T; i++) {
  let count = 0;
  for (let j = 2; j <= input[i] / 2; j++) {
    if (prime[j] && prime[input[i] - j]) {
      count += 1;
    }
  }
  result.push(count);
}

console.log(result.join("\n"));