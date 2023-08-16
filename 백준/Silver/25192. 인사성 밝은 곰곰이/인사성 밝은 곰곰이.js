const input = require("fs").readFileSync(0).toString().trim().split("\n");

const N = parseInt(input.shift());
const set = new Set();
let count = 0;

for (let i = 0; i < N; i++) {
  if (input[i] === "ENTER") {
    count += set.size;
    set.clear();
    continue;
  }
  set.add(input[i]);
  if (i === input.length - 1) count += set.size;
}

console.log(count);