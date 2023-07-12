const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

const N = input[0];
const M = input[1];

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    } 
    return true;
}

let primes = [];
let count = 0;

for (let i = N; i <= M; i++) {
    if (isPrime(i) === true) primes.push(i);
}

primes.forEach(v => {
    count += v;
});

if (primes.length === 0) console.log(-1);
else console.log(`${count}\n${primes[0]}`);