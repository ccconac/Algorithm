const input = require("fs").readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);
let count = 0;

const recursion = (str, left, right) => {
  count += 1;
  if (left >= right) return 1;
  else if (str[left] !== str[right]) return 0;
  else return recursion(str, left + 1, right - 1);
};

const isPalindrome = (str) => {
  return recursion(str, 0, str.length - 1);
};

for (let i = 1; i <= N; i++) {
  console.log(`${isPalindrome(input[i])} ${count}`);
  count = 0;
}