const input = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const T = input.shift();

const cycle = [];

for (let i = 1; i <= 15; i++) cycle.push(i);
for (let i = 14; i >= 2; i--) cycle.push(i);

for (let i = 0; i < T; i++) {
  const N = input[i];
  const number = cycle[(N - 1) % 28];

  const binary = number.toString(2).padStart(4, '0');
  const result = [...binary]
    .map((bit) => (bit === '1' ? '딸기' : 'V'))
    .join('');

  console.log(result);
}