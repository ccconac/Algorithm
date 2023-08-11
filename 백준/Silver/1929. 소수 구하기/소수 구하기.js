const input = require("fs").readFileSync(0).toString().split(" ").map(Number);

const [M, N] = [...input];
const result = [];

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return result.push(num);
};

for (let i = M; i <= N; i++) {
  isPrime(i);
}

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
