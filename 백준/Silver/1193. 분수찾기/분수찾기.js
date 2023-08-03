const input = require("fs").readFileSync(0).toString();

let X = Number(input);

let count = 1;
while (X > 0) {
  X -= count;
  count++;
}

if (count % 2 === 1) {
  console.log(`${count - (1 - X)}/${1 + -X}`);
} else {
  console.log(`${1 + -X}/${count - (1 - X)}`);
}
