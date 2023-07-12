const input = require('fs').readFileSync(0).toString().trim().split('\n');

const N = input.shift();
const [nums] = input.map(v => v.split(' ').map(Number));

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    } 
    return true;
}

let result = 0;

for (let i = 0; i < N; i++) {
    if (isPrime(nums[i]) === true) result += 1;
}

console.log(result);