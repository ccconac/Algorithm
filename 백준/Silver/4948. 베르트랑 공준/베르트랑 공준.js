const input = require("fs").readFileSync(0).toString().split("\n").map(Number);

input.pop();
const result = [];
let count = 0;

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

for (let i = 0; i < input.length - 1; i++) {
  for (let j = input[i] + 1; j <= 2 * input[i]; j++) {
    if (isPrime(j) === true) {
      count += 1;
    }
  }
  result.push(count);
  count = 0;
}

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}