const input = require("fs").readFileSync(0).toString().split(" ").map(Number);

const [N, K] = [...input];

const factorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

const answer = factorial(N) / (factorial(K) * factorial(N - K));
console.log(answer);