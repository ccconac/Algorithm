const input = require('fs').readFileSync(0).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const nums = input.map(v => v.split(' ').map(Number));

const [basket] = Array.from(Array(1), () => Array(N).fill(0));

for (let i = 0; i < M; i++) {
    for (let j = nums[i][0] - 1; j <= nums[i][1] - 1; j++) {
        basket[j] = nums[i][2];
    }
}

console.log(basket.join(' '));