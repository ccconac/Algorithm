const input = require("fs").readFileSync(0).toString();

const N = Number(input);

const fibonacci = (num) => {
  if (num === 0) return 0;
  else if (num === 1) return 1;
  else return fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(fibonacci(N));