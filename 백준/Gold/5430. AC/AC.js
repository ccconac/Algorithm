const input = require('fs').readFileSync(0).toString().split('\n');

const T = Number(input.shift());

for (let i = 0; i < T * 3; i += 3) {
  const p = input[i];
  const n = Number(input[i + 1]);
  const arr = JSON.parse(input[i + 2]);

  let start = 0;
  let end = n;
  let isReverse = false;
  let isError = false;

  for (let j = 0; j < p.length; j++) {
    switch (p[j]) {
      case 'R':
        isReverse = !isReverse;
        break;
      case 'D':
        if (start === end) isError = true;
        else isReverse ? (end -= 1) : (start += 1);
        break;
    }

    if (isError) break;
  }

  if (isError) console.log('error');
  if (!isError) {
    const result = isReverse ? arr.slice(start, end).reverse() : arr.slice(start, end);
    console.log(JSON.stringify(result));
  }
}