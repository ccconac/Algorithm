const input = require("fs").readFileSync(0).toString().trim().split("\n").map((v) => v.split(" ").map(Number));

const [N, M] = input.shift();
const nums = input.shift();
const sumArr = new Array(nums.length + 1).fill(0);
const result = [];

nums.forEach((v, i) => {
  sumArr[i + 1] = sumArr[i] + v;
});

input.forEach((v) => {
  const [i, j] = v;
  result.push(sumArr[j] - sumArr[i - 1]);
});

console.log(result.join("\n"));