const input = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

const A = input[0];
const B = input[1];

const gcd = (a, b) => {
    while (b !== 0) {
        let temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}

const lcm = (a, b) => (a * b) / gcd(a, b);

result = lcm(A, B);
console.log(result);