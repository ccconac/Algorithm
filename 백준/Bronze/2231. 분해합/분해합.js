const input = require('fs').readFileSync(0).toString().trim();

const N = Number(input);
let result = 0;

for (let M = 1; M < N; M++) {
    let sum = 0;
    let num = M;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    if (M + sum === N) {
        result = M;
        break;
    }
}

console.log(result);