const input = require("fs").readFileSync(0).toString().split("\n");

const N = parseInt(input.shift());

const arr = input[0].split(" ").map(Number).sort((a, b) => a - b);
const max = arr[arr.length - 1];
const min = arr[0];

console.log(max * min);