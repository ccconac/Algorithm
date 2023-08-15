const input = require("fs").readFileSync(0).toString();

const N = Number(input);
const result = N * (N - 1);

console.log(result);