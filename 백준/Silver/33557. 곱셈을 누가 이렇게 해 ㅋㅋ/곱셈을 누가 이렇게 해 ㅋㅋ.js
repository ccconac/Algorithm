const input = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n');

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  let [A, B] = input[i].split(' ').map(Number);
  const correct = String(A * B);

  let wrong = '';
  let a = A,
    b = B;

  while (a > 0 && b > 0) {
    wrong = String((a % 10) * (b % 10)) + wrong;
    a = Math.floor(a / 10);
    b = Math.floor(b / 10);
  }

  while (a > 0) {
    wrong = String(a % 10) + wrong;
    a = Math.floor(a / 10);
  }

  while (b > 0) {
    wrong = String(b % 10) + wrong;
    b = Math.floor(b / 10);
  }

  console.log(correct === wrong ? 1 : 0);
}
