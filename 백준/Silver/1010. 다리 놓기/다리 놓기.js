const input = require("fs").readFileSync(0).toString().split("\n");

const T = parseInt(input.shift());

const factorial = (num) => {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
};

for (let i = 0; i < T; i++) {
  const [N, M] = input[i].split(" ").map(Number);
  const result = Math.round(factorial(M) / (factorial(N) * factorial(M - N)));

  console.log(result);
}