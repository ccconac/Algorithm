const input = require("fs").readFileSync(0).toString();
let N = Number(input);
let count = 0;

while (N >= 3) {
  if (N % 5 === 0) {
    N -= 5;
    count++;
  } else {
    N -= 3;
    count++;
  }
}

if (N !== 0) {
  console.log(-1);
} else {
  console.log(count);
}
