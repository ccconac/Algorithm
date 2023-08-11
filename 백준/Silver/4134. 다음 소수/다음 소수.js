const input = require("fs").readFileSync(0).toString().split("\n").map(Number);

const T = input.shift();
const result = [];

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

for (let i = 0; i < input.length; i++) {
  let num = input[i];
  while (true) {
    if (isPrime(num) === true) {
      result.push(num);
      break;
    } else num++;
  }
}

for (let i = 0; i < T; i++) {
  console.log(result[i]);
}
