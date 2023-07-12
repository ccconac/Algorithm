const input = require('fs').readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const basket = Array(N).fill(1).map((a, b) => a + b);

for (let i = 1; i <= M; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    let temp = basket[x - 1];
    basket[x - 1] = basket[y - 1];
    basket[y - 1] = temp;
}

console.log(basket.join(' '));