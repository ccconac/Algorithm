const input = require("fs").readFileSync(0).toString();

const N = Number(input);

const factorial = (num) => {
  if (num === 0) return 1;
  else if (num < 2) return num;
  else return factorial(num - 1) * num;
};

console.log(factorial(N));