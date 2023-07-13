const input = require('fs').readFileSync(0).toString().trim().split('\n');

const arr = input.map(v => v.split(' '));
const score = [];
const grade = [];

arr.forEach(v => {
    if (v[2] !== 'P') {
        score.push(parseInt(v[1]));
        if (v[2] === 'A+') grade.push(4.5);
        else if (v[2] === 'A0') grade.push(4.0);
        else if (v[2] === 'B+') grade.push(3.5);
        else if (v[2] === 'B0') grade.push(3.0);
        else if (v[2] === 'C+') grade.push(2.5);
        else if (v[2] === 'C0') grade.push(2.0);
        else if (v[2] === 'D+') grade.push(1.5);
        else if (v[2] === 'D0') grade.push(1.0);
        else grade.push(0.0);
    }  
});

let sum = 0;
let scoreSum = 0;

score.forEach((v, i) => {
    sum += v * grade[i];
    scoreSum += v;
});

const avg = sum / scoreSum;
console.log(avg);