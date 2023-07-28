const input = require("fs").readFileSync(0).toString().split(" ").map(Number);

const [A, B, V] = input;
const day = Math.ceil((V - B) / (A - B));

console.log(day);