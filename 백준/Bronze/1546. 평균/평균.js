const input = require('fs').readFileSync(0).toString().trim().split('\n').map(v => v.split(' ').map(Number));

const [N] = input[0];
const scores = input[1].sort((a, b) => a - b);
const M = scores[N - 1];

const newScores = [];

for (let i = 0; i < N; i++) {
    newScores.push((scores[i] / M) * 100);
}

let sum = 0;

newScores.forEach(v => {
    sum += v;
});

const avg = sum / N;
console.log(avg);


