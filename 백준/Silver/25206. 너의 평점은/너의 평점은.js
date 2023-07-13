const input = require('fs').readFileSync(0).toString().trim().split('\n').map(v => v.split(' '));

const grade = {
    'A+': 4.5,
    'A0': 4.0,
    'B+': 3.5,
    'B0': 3.0,
    'C+': 2.5,
    'C0': 2.0,
    'D+': 1.5,
    'D0': 1.0,
    'F': 0.0
}

let sum = 0;
let scoreSum = 0;

for (let [sub, score, g] of input) {
	if (g == "P") continue;
	scoreSum += score * 1;
	sum += score * grade[g];
}

const avg = sum / scoreSum
console.log(avg);